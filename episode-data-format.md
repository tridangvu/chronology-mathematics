# Format de données des épisodes — version 0.1

## 1. Principe général

Chaque épisode est stocké dans un fichier Markdown autonome :

```text
episodes/<slug>.md
```

Le fichier contient :

1. un en-tête YAML pour les données structurées ;
2. le corps Markdown pour le contenu éditorial.

Le YAML sert à la chronologie, aux filtres, aux graphes et à la maintenance.
Le Markdown sert à la lecture publique.

## 2. Identité stable

### `id`

Identifiant interne, immuable et indépendant du titre.

Format recommandé :

```text
EPI-YYYY-AUTEUR-SUJET
```

Exemple :

```text
EPI-1749-EULER-TWO-SQUARES
```

Pour une date incertaine :

```text
EPI-C1749-EULER-TWO-SQUARES
```

L’identifiant ne doit jamais être modifié après publication.

### `slug`

Adresse lisible de la page :

```text
euler-demontre-theoreme-deux-carres
```

Le slug peut exceptionnellement changer avec une redirection.

### `entry_code`

Code court facultatif pour compatibilité avec une base existante.

## 3. Dates

```yaml
date_display: "1749"
year_start: 1749
year_end: 1749
date_precision: "exact"
```

Valeurs autorisées pour `date_precision` :

- `exact`
- `approximate`
- `range`
- `traditional`
- `disputed`

`date_display` est le texte montré au lecteur.
`year_start` et `year_end` servent au tri.

## 4. Mathématiciens

```yaml
mathematicians:
  - id: "PERSON-EULER-LEONHARD"
    name: "Leonhard Euler"
```

Cette structure permet de créer plus tard des pages de mathématiciens sans dépendre d’une simple chaîne.

## 5. Domaines et thèmes

```yaml
domain_primary: "Théorie des nombres"
domain_secondary: "Formes quadratiques"
theme_tags:
  - "sommes de deux carrés"
  - "descente infinie"
  - "nombres premiers"
```

`domain_primary` contient exactement une valeur. `domain_secondary` est facultatif. `theme_tags` est une liste libre mais contrôlée progressivement.

## 6. Niveau

```yaml
level: "Intermédiaire"
```

Le niveau décrit uniquement le niveau réel du contenu mathématique de la page. Aucune taxonomie complexe n’est imposée dans la version 0.1.

## 7. Statut éditorial

```yaml
status: "draft"
```

Valeurs autorisées : `draft`, `review`, `published`, `archived`.

## 8. Statut historique

```yaml
certainty_level: "high"
modernization_level: "moderate"
source_status: "primary-and-secondary-sources-checked"
notes_to_verify: []
```

Valeurs recommandées pour `certainty_level` : `high`, `medium`, `low`, `disputed`.

Valeurs recommandées pour `modernization_level` : `minimal`, `moderate`, `substantial`.

## 9. Résumé

```yaml
summary: "Euler obtient une preuve du théorème de Fermat..."
```

Le résumé sert dans la chronologie, les résultats de recherche, les aperçus de liens et les métadonnées du site.

## 10. Relations entre épisodes

Toutes les relations utilisent exclusivement des identifiants stables.

```yaml
prerequisites:
  - "EPI-XXXX-..."
dependencies:
  - "EPI-XXXX-..."
descendants:
  - "EPI-XXXX-..."
related_episodes:
  - "EPI-XXXX-..."
```

- `prerequisites` : épisodes utiles pour comprendre techniquement la page ;
- `dependencies` : épisodes historiquement ou mathématiquement nécessaires ;
- `descendants` : épisodes rendus possibles ou profondément préparés ;
- `related_episodes` : liens pertinents sans dépendance directe.

## 11. Modules facultatifs

```yaml
optional_modules:
  - "worked_example"
  - "modern_viewpoint"
```

Valeurs initiales : `worked_example`, `modern_viewpoint`, `misconceptions`, `exercises`, `glossary`, `historiographical_note`, `primary_text_excerpt`, `alternative_proof`, `computational_experiment`.

## 12. Sources structurées

```yaml
sources_primary:
  - id: "SRC-EULER-1749-..."
    citation: ""
    url: null
    pages: null
    note: null

sources_secondary:
  - id: "SRC-WEIL-1984-..."
    citation: ""
    url: null
    pages: null
    note: null
```

Les références sont aussi citées localement dans le Markdown avec des notes de bas de page.

## 13. Maintenance

```yaml
created_at: "2026-07-17"
updated_at: "2026-07-17"
```

Le format utilisé est ISO `YYYY-MM-DD`.

## 14. Champs obligatoires

```text
id
slug
title
date_display
year_start
year_end
date_precision
mathematicians
domain_primary
theme_tags
level
status
summary
prerequisites
dependencies
descendants
related_episodes
optional_modules
sources_primary
sources_secondary
created_at
updated_at
```

## 15. Règles de cohérence

1. `id` est unique et immuable.
2. `slug` est unique.
3. `year_start <= year_end`.
4. Toute relation pointe vers un `id` d’épisode valide.
5. Toute personne utilise un `id` stable.
6. Les listes vides sont écrites `[]`, jamais `null`.
7. Les champs textuels absents valent `null` s’ils sont inapplicables et `""` s’ils restent à remplir.
8. Le corps Markdown ne répète pas inutilement les métadonnées du YAML.
9. Une preuve peut supposer connus des épisodes antérieurs, mais doit les citer.
10. Les faits documentés et les reconstructions pédagogiques doivent être distingués.

## 16. Organisation des fichiers

```text
site/
├── episodes/
├── people/
├── sources/
├── taxonomies/
└── schemas/
    └── episode.schema.json
```
