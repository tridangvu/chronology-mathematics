#!/usr/bin/env python3
"""Construit data/episodes.json à partir des fichiers episodes/*.md."""

from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

try:
    import yaml
    import mistune
except ImportError as exc:
    raise SystemExit(
        "Dépendances manquantes. Exécute : pip install -r requirements.txt"
    ) from exc

ROOT = Path(__file__).resolve().parents[1]
EPISODES_DIR = ROOT / "episodes"
OUTPUT = ROOT / "data" / "episodes.json"


def split_front_matter(text: str, source: Path) -> tuple[dict[str, Any], str]:
    if not text.startswith("---\n"):
        raise ValueError(f"{source.name}: en-tête YAML manquant")

    try:
        _, yaml_text, body = text.split("---", 2)
    except ValueError as exc:
        raise ValueError(f"{source.name}: en-tête YAML mal fermé") from exc

    metadata = yaml.safe_load(yaml_text) or {}
    if not isinstance(metadata, dict):
        raise ValueError(f"{source.name}: le YAML doit être un objet")
    return metadata, body.strip()


def validate(episodes: list[dict[str, Any]]) -> list[str]:
    errors: list[str] = []
    ids: set[str] = set()
    slugs: set[str] = set()

    required = [
        "id", "slug", "title", "date_display", "mathematicians",
        "domain_primary", "theme_tags", "level", "status", "summary",
        "prerequisites", "dependencies", "descendants", "related_episodes",
        "optional_modules", "sources_primary", "sources_secondary",
    ]

    for episode in episodes:
        source = episode.get("_source", "<inconnu>")

        for field in required:
            if field not in episode:
                errors.append(f"{source}: champ manquant « {field} »")

        episode_id = episode.get("id")
        slug = episode.get("slug")

        if not episode_id:
            errors.append(f"{source}: id vide")
        elif episode_id in ids:
            errors.append(f"{source}: id dupliqué « {episode_id} »")
        ids.add(episode_id)

        if not slug:
            errors.append(f"{source}: slug vide")
        elif slug in slugs:
            errors.append(f"{source}: slug dupliqué « {slug} »")
        slugs.add(slug)

        start = episode.get("year_start")
        end = episode.get("year_end")
        if isinstance(start, int) and isinstance(end, int) and start > end:
            errors.append(f"{source}: year_start est supérieur à year_end")

        for field in [
            "theme_tags", "prerequisites", "dependencies", "descendants",
            "related_episodes", "optional_modules", "sources_primary",
            "sources_secondary",
        ]:
            if field in episode and not isinstance(episode[field], list):
                errors.append(f"{source}: « {field} » doit être une liste")

    known_ids = {episode.get("id") for episode in episodes}
    for episode in episodes:
        source = episode.get("_source", "<inconnu>")
        for field in ["dependencies", "descendants", "related_episodes"]:
            for target in episode.get(field, []):
                if target not in known_ids:
                    print(
                        f"AVERTISSEMENT — {source}: {field} pointe vers "
                        f"un épisode absent du prototype : {target}",
                        file=sys.stderr,
                    )

    return errors


def main() -> int:
    markdown = mistune.create_markdown(
        escape=False,
        plugins=["table", "footnotes", "strikethrough"],
    )

    episodes: list[dict[str, Any]] = []

    for source in sorted(EPISODES_DIR.glob("*.md")):
        metadata, body = split_front_matter(
            source.read_text(encoding="utf-8"),
            source,
        )
        metadata["_source"] = source.name
        metadata["body_markdown"] = body
        metadata["body_html"] = markdown(body)
        episodes.append(metadata)

    errors = validate(episodes)
    if errors:
        print("Échec de validation :", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    for episode in episodes:
        episode.pop("_source", None)

    episodes.sort(
        key=lambda episode: (
            episode.get("year_start")
            if isinstance(episode.get("year_start"), int)
            else 10**9,
            episode.get("title", ""),
        )
    )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(
        json.dumps(episodes, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"{len(episodes)} épisodes écrits dans {OUTPUT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
