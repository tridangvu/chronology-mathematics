---
# IDENTITÉ TECHNIQUE
id: null
slug: ""
entry_code: ""

# IDENTIFICATION DE L’ÉPISODE
title: ""
subtitle: null

date_display: ""
year_start: null
year_end: null
date_precision: "exact" # exact | approximate | range | traditional | disputed

mathematicians_text: ""
domain_primary: ""
domain_secondary: null
theme_tags: "" # chaîne séparée par des points-virgules

# Le niveau décrit uniquement le niveau réel du contenu mathématique.
level: ""

status: "draft" # draft | review | published | archived

# STATUT HISTORIQUE ET ÉDITORIAL
certainty_level: "" # high | medium | low | disputed
modernization_level: "" # minimal | moderate | substantial
source_status: ""
notes_to_verify: null

# RÉSUMÉ
summary: ""

# RELATIONS ENTRE ÉPISODES
# Toujours utiliser les identifiants stables des épisodes.
prerequisites: []
dependencies: []
descendants: []
related_episodes: []

# MODULES FACULTATIFS UTILISÉS DANS CET ÉPISODE
optional_modules: []
# Exemples : worked_example, modern_viewpoint, misconceptions, exercises,
# glossary, historiographical_note, primary_text_excerpt,
# alternative_proof, computational_experiment

# MAINTENANCE
created_at: null
updated_at: null
---

<!--
Un épisode raconte un acte mathématique historiquement situé : un problème
se précise, une idée devient possible, un résultat est démontré ou un cadre
conceptuel est transformé.

Le texte Markdown est directement le texte public. La rigidité porte sur les
fonctions remplies par les sections, non sur un style télégraphique.

Aucune longueur cible n’est imposée. La preuve principale doit être complète
et rigoureuse au niveau annoncé. Elle peut supposer connus des résultats
établis dans des épisodes antérieurs, à condition que ces dépendances soient
explicites et liées par identifiant.
-->

# {{ title }}

> {{ En une ou deux phrases : ce qui se passe, le problème concerné et l’importance de l’épisode. }}

## 1. Le problème avant cet épisode

<!-- Faire apparaître ce qui était connu, ce qui résistait, pourquoi la question était naturelle et quels épisodes antérieurs sont supposés connus. -->

{{ Décrire la situation mathématique antérieure et la difficulté précise. }}

## 2. Comment l’idée devient possible

<!-- Fil génétique central : privilégier la plausibilité mathématique, la puissance explicative et l’intérêt pédagogique, tout en distinguant faits documentés, inférences plausibles et reconstruction moderne. -->

### Le point de départ

{{ Exemple, calcul, analogie, obstacle ou méthode antérieure. }}

### Les essais naturels

{{ Premières transformations ou approches raisonnables. }}

### L’obstacle décisif

{{ Pourquoi les approches précédentes ne suffisent pas. }}

### Le changement de point de vue

> **L’idée décisive.**  
> {{ Formuler le geste intellectuel central. }}

{{ Montrer comment cette idée lève l’obstacle. }}

## 3. L’épisode historique

<!-- Situer l’acte réel : auteur, texte, lettre, mémoire, datation, différence entre découverte et publication, réception pertinente. -->

{{ Raconter l’événement historique avec précision et sobriété. }}

## 4. Ce qui est effectivement établi

### Formulation historique

{{ Restituer ou paraphraser fidèlement la formulation de l’époque. }}

### Formulation moderne

{{ Donner l’énoncé complet avec toutes les hypothèses explicites. }}

### Portée exacte

{{ Dire ce qui est réellement prouvé, ce qui ne l’est pas encore et les restrictions éventuelles. }}

## 5. Démonstration

<!-- La démonstration doit être entière et rigoureuse. Les résultats antérieurs utilisés doivent être annoncés, liés et leur rôle expliqué. -->

### Résultats antérieurs utilisés

- {{ EPISODE-ID — résultat utilisé et rôle dans la preuve }}

### Plan de la démonstration

1. {{ Première étape }}
2. {{ Deuxième étape }}
3. {{ Étape décisive }}
4. {{ Conclusion }}

### Preuve détaillée

{{ Démonstration complète et rigoureuse. }}

### Où intervient exactement l’idée décisive ?

{{ Identifier le point où le changement de point de vue produit réellement le résultat. }}

## 6. Ce que cet épisode change

### Conséquences immédiates

{{ Résultats, méthodes ou calculs rendus possibles. }}

### Transformation conceptuelle

{{ Changement dans l’organisation ou la compréhension des mathématiques. }}

### Ce qui reste à faire

{{ Limites persistantes et problèmes transmis aux épisodes suivants. }}

## 7. Place dans la chronologie mathématique

### Épisodes dont celui-ci dépend

- [{{ Titre }}]({{ lien généré depuis EPISODE-ID }}) — {{ nature de la dépendance }}

### Épisodes préparés par celui-ci

- [{{ Titre }}]({{ lien généré depuis EPISODE-ID }}) — {{ ce qui est transmis ou transformé }}

### Épisodes parallèles ou complémentaires

- [{{ Titre }}]({{ lien généré depuis EPISODE-ID }}) — {{ nature du rapprochement }}

## 8. Sources

<!-- Combiner citations locales, notes de bas de page et bibliographie finale. -->

### Sources primaires

1. {{ Référence précise. }}

### Sources secondaires

1. {{ Référence précise. }}

### État documentaire

- **Attribution :** {{ certaine, probable, disputée }}
- **Datation :** {{ certaine, approximative, multiple }}
- **Portée du résultat historique :** {{ commentaire }}
- **Part de reconstruction pédagogique :** {{ commentaire }}
- **Points restant à vérifier :** {{ commentaire }}

<!-- MODULES FACULTATIFS -->

## Module facultatif — Exemple travaillé

{{ Exemple complet. }}

## Module facultatif — Le point de vue moderne

### Ce que le langage moderne clarifie

{{ Structures ou invariants modernes. }}

### Ce qu’il risque d’anachroniser

{{ Concepts qu’il ne faut pas attribuer directement aux acteurs historiques. }}

## Module facultatif — Difficultés et contresens fréquents

- {{ Contresens historique }}
- {{ Erreur mathématique }}
- {{ Hypothèse oubliée }}

## Module facultatif — Autre démonstration

{{ Preuve alternative et ce qu’elle révèle. }}

## Module facultatif — Expérience ou calcul

{{ Calcul explicite, visualisation ou expérimentation informatique. }}

## Module facultatif — Questions et exercices

1. {{ Question de compréhension }}
2. {{ Étape de preuve à reconstruire }}
3. {{ Exemple à calculer }}

## Module facultatif — Glossaire local

- **{{ Terme }} :** {{ définition }}

## Module facultatif — Note historiographique

{{ Distinguer faits établis, débats, hypothèses et reconstruction pédagogique. }}

## Module facultatif — Extrait d’une source primaire

> {{ Court extrait pertinent. }}

{{ Traduction, contextualisation et explication. }}

[^note-courte]: {{ Référence ou précision correspondante. }}

<!-- Checklist interne facultative : titre précis ; problème compréhensible ; fil génétique ; faits distingués des reconstructions ; formulation historique distincte de la formulation moderne ; portée exacte ; preuve complète ; dépendances liées ; idée décisive identifiable ; conséquences causales ; sources locales, primaires et secondaires ; incertitudes visibles. -->
