# Épisodes mathématiques — squelette du site

Prototype statique, simple et sobre, construit autour d’un fichier Markdown
avec en-tête YAML par épisode.

## Contenu

- `index.html` : page d’accueil ;
- `timeline.html` : chronologie filtrable ;
- `episode.html` : page dynamique d’un épisode ;
- `episodes/` : sources Markdown/YAML ;
- `scripts/build.py` : transformation des épisodes en JSON ;
- `data/episodes.json` : données consommées par le navigateur ;
- `schemas/episode.schema.json` : schéma initial ;
- `assets/` : styles et JavaScript.

## Lancer le prototype

Depuis le dossier du projet :

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python scripts/build.py
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

Il faut utiliser un serveur local : ouvrir directement `index.html` avec
`file://` bloque généralement le chargement de `data/episodes.json`.

## Ajouter un épisode

1. Copier `episode-blank.md` dans `episodes/`.
2. Remplir l’en-tête YAML et le corps Markdown.
3. Exécuter :

```bash
python scripts/build.py
```

4. Recharger le navigateur.

## Choix techniques

Le prototype n’utilise aucun framework côté navigateur. Il est donc facile à
comprendre, modifier ou migrer plus tard vers Astro, Eleventy, Next.js ou un
autre générateur.

MathJax est chargé depuis un CDN afin de rendre les formules écrites avec
`\(...\)` et `\[...\]`.
