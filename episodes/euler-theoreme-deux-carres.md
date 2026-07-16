---
id: "EPI-1749-EULER-TWO-SQUARES"
slug: "euler-demontre-theoreme-deux-carres"
entry_code: null
title: "Euler démontre le théorème des deux carrés de Fermat"
subtitle: null
date_display: "1749–1754"
year_start: 1749
year_end: 1754
date_precision: "range"
mathematicians:
  - id: "PERSON-EULER-LEONHARD"
    name: "Leonhard Euler"
domain_primary: "Théorie des nombres"
domain_secondary: "Sommes de carrés"
theme_tags: ["sommes de deux carrés", "descente", "nombres premiers"]
level: "Intermédiaire"
status: "published"
certainty_level: "medium"
modernization_level: "substantial"
source_status: "prototype à documenter"
notes_to_verify:
  - "Préciser la chronologie exacte des mémoires et lettres."
summary: 'Euler transforme l’affirmation de Fermat sur les nombres premiers congrus à 1 modulo 4 en un théorème démontré par une chaîne d’identités et de descentes.'
prerequisites:
  - "EPI-C0300-EUCLIDE-INFINITE-PRIMES"
dependencies:
  - "EPI-C0300-EUCLIDE-INFINITE-PRIMES"
descendants:
  - "EPI-1770-LAGRANGE-PERMUTATIONS-EQUATIONS"
related_episodes: []
optional_modules: ["historiographical_note", "worked_example"]
sources_primary: []
sources_secondary: []
created_at: "2026-07-17"
updated_at: "2026-07-17"
---

## 1. Le problème avant cet épisode

Fermat avait affirmé qu’un nombre premier impair \(p\) est somme de deux carrés exactement lorsque \(p\equiv 1\pmod 4\). La nécessité de la congruence est accessible ; l’existence d’une représentation

\[
p=x^2+y^2
\]

est beaucoup plus difficile.

## 2. Comment l’idée devient possible

Une première étape consiste à produire une congruence

\[
a^2\equiv -1\pmod p.
\]

Elle signifie qu’un multiple de \(p\) peut être écrit comme somme de deux carrés. Le problème devient alors de faire descendre ce multiple jusqu’à \(p\) lui-même.

> **L’idée décisive.** Combiner une existence modulo \(p\) avec une procédure de descente contrôlée sur les représentations par deux carrés.

## 3. L’épisode historique

Le prototype conserve ici une présentation synthétique. L’épisode définitif devra distinguer les différentes étapes de la recherche d’Euler, ses échanges, les textes publiés et la portée exacte de chaque preuve.

## 4. Ce qui est effectivement établi

### Formulation moderne

Pour tout nombre premier \(p\),

\[
p=x^2+y^2
\]

avec \(x,y\in\mathbb Z\) si et seulement si \(p=2\) ou \(p\equiv1\pmod4\).

### Portée exacte

La page définitive devra séparer le théorème général de la forme historiquement démontrée à chaque étape.

## 5. Démonstration

Cette section est encore un emplacement de prototype. Elle devra contenir une preuve entière et rigoureuse, en renvoyant vers les épisodes antérieurs consacrés aux congruences, à l’identité des deux carrés et à la descente.

## 6. Ce que cet épisode change

Une proposition célèbre mais annoncée sans preuve devient un résultat démontré. Surtout, le problème des représentations d’entiers commence à être traité par des méthodes générales plutôt que par une collection d’exemples.

## 7. Place dans la chronologie mathématique

L’épisode prépare la théorie des formes quadratiques et, plus largement, l’étude structurée des lois de représentation des entiers.

## 8. Sources

Les références primaires et secondaires seront ajoutées pendant la rédaction complète.
