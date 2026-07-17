---
id: "EPI-C0300-EUCLIDE-INFINITE-PRIMES"
slug: "euclide-demontre-infinitude-nombres-premiers"
entry_code: null
title: "Euclide démontre l’infinité des nombres premiers"
subtitle: null
date_display: "vers 300 av. J.-C."
year_start: -300
year_end: -300
date_precision: "approximate"
mathematicians:
  - id: "PERSON-EUCLIDE"
    name: "Euclide"
domain_primary: "Théorie des nombres"
domain_secondary: "Arithmétique grecque"
theme_tags: ["nombres premiers", "preuve par construction"]
level: "Élémentaire"
status: "published"
certainty_level: "high"
modernization_level: "moderate"
source_status: "prototype"
notes_to_verify: []
summary: "À partir de toute collection finie de nombres premiers, Euclide construit un entier qui force l’apparition d’un nouveau diviseur premier."
prerequisites: []
dependencies: []
descendants:
  - "EPI-1749-EULER-TWO-SQUARES"
related_episodes: []
optional_modules: ["modern_viewpoint"]
sources_primary: []
sources_secondary: []
created_at: "2026-07-17"
updated_at: "2026-07-17"
---

## 1. Le problème avant cet épisode

Les nombres premiers interviennent comme les briques multiplicatives des entiers. Une question naturelle est alors de savoir si cette collection finit par s’épuiser.

## 2. Comment l’idée devient possible

Supposons que l’on dispose d’une liste finie de nombres premiers \(p_1,\dots,p_n\). Leur produit est divisible par chacun d’eux. En ajoutant \(1\), on obtient

\[
N=p_1p_2\cdots p_n+1,
\]

qui ne peut être divisible par aucun nombre premier de la liste.

> **L’idée décisive.** Construire un entier qui échappe simultanément à tous les candidats supposés exhaustifs.

## 3. L’épisode historique

Dans les *Éléments*, Euclide formule et démontre que les nombres premiers sont plus nombreux que toute multitude assignée de nombres premiers.

## 4. Ce qui est effectivement établi

### Formulation moderne

Il existe une infinité de nombres premiers.

## 5. Démonstration

Supposons qu’il n’existe que les nombres premiers \(p_1,\dots,p_n\). Considérons \(N=p_1\cdots p_n+1\). Comme \(N>1\), il possède un diviseur premier \(q\). Mais pour tout \(i\),

\[
N\equiv 1\pmod {p_i},
\]

donc aucun \(p_i\) ne divise \(N\). Ainsi \(q\) n’appartient pas à la liste, contradiction.

## 6. Ce que cet épisode change

L’argument devient un modèle durable : pour réfuter l’exhaustivité d’une liste, on construit un nouvel objet qui échappe à tous ses éléments.

## 7. Place dans la chronologie mathématique

L’épisode précède de très loin les classifications arithmétiques modernes, mais fournit déjà un exemple canonique de construction diagonale.

## 8. Sources

Le contenu est volontairement minimal dans ce prototype.
