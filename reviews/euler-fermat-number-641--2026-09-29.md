# Fiche de validation — Euler’s factor 641

## Identification

- **Article / identifiant :** euler-fermat-number-641 ; src/content/articles/euler-fermat-number-641.md.
- **Version examinée :** empreintes finales ci-dessous ; base du dépôt 815806425988537951388c1cd25a0e6c88fde260.
- **Date de relecture :** 29 septembre 2026.
- **Relecteur :** ChatGPT / Codex, auteur du brouillon.
- **Nature de la relecture :** auto-relecture par IA, accompagnée de calculs exacts et de contrôles techniques ; aucune relecture humaine indépendante ni expérimentation auprès de lecteurs n'est revendiquée.
- **Référentiel :** [v1.1](../docs/quality-reference.md), C0–C7 et lisibilité/intégrité.
- **Public principal :** lecteur connaissant divisibilité, factorisation première et congruences. Petit théorème de Fermat admis, explicitement énoncé ; propriété de l'ordre démontrée.
- **Prérequis supplémentaires :** inverses modulo un premier pour Lucas ; polynômes sur un corps et borne du nombre de racines pour le prolongement cyclotomique. Irréductibilité cyclotomique sur les rationnels explicitement admise.
- **Périmètre :** article complet, calculs, dépendances des preuves, sources effectivement citées et intégration au site.

## Diagnostic du brouillon et modifications

Le brouillon n'avait pas de défaut mathématique bloquant identifié. Les réserves portaient sur la précision des prérequis avancés, quelques répétitions et l'équilibre de la fin.

1. Les sections Comments et Later developments ont été ramenées de 736 à 593 mots/blocs séparés par des espaces, soit environ **19 %** de moins selon ce comptage identique, sans retirer les étapes décisives.
2. L'attribution de la preuve courte tient dans un paragraphe : Coxeter est cité par Hardy–Wright, avec Kraitchik et Bennett ; aucune date d'invention ni priorité exclusive n'est affirmée.
3. Le but de la construction de Lucas est annoncé : obtenir une racine carrée de 2 pour faire diviser la moitié de p−1 par l'ordre. La preuve générale conserve l'hypothèse n≥2.
4. Les prérequis cyclotomiques sont annoncés dans l'en-tête et au début du passage optionnel. La factorisation explicite et la limite du filtre sont conservées.
5. Le titre « two squarings » est rendu littéral en démarrant explicitement à 2^8=256.
6. Métadonnées et bibliographie sont intégrées au format du site ; références cliquables, relation de lecture optionnelle vers l'article sur le critère d'Euler. Aucun changement du gabarit général n'est nécessaire.

## Contrat pédagogique

- **Le lecteur sait déjà :** calculer avec des congruences et tester une divisibilité.
- **Il cherche à comprendre ou à faire :** trouver un diviseur de F_5 sans connaître d'avance le nombre 641.
- **La difficulté est :** transformer une recherche dans les nombres premiers en un petit ensemble de candidats.
- **L'idée nouvelle consiste à :** extraire l'ordre 64 de 2 modulo un diviseur premier, puis imposer p≡1 modulo 64.
- **Après lecture, il saura :** reconstruire cette recherche, vérifier 641, distinguer recherche et certificat, et expliquer le filtre renforcé ainsi que le lien aux racines de l'unité.

## Évaluation argumentée

| Critère | État | Passage ou contrôle justifiant l'évaluation | Correction nécessaire |
| --- | --- | --- | --- |
| C0 — Repères et périmètre | Satisfait | Titre précis ; 1732 = année d'annonce, 26 septembre = présentation, 1738 = impression ; E134 rétrospectif ; trois niveaux de prérequis dans le frontmatter. | Aucune. |
| C1 — Motivation et histoire | Satisfait | Factorisation lorsque l'exposant a un facteur impair ; cinq valeurs premières ; obstacle du cas suivant ; E26 et E134 distingués. | Aucune. |
| C2 — Énoncé ou définition | Satisfait | Indexation F_n=2^(2^n)+1, n≥0 ; 641 divise F_5 et factorisation numérique ; primalité des facteurs distinguée de la composité du produit. | Aucune. |
| C3 — Démarche et justification complète | Satisfait | Propriété de l'ordre prouvée par division euclidienne ; ordre exactement 64 ; petit théorème de Fermat explicitement admis ; recherche puis certificat arithmétique complet. La notation moderne et le tableau ne sont pas attribués à un carnet d'Euler. | Aucune. |
| C4 — Exemple | Satisfait | Tableau des cinq candidats et deux élévations au carré intégrés dans la preuve ; résultats recalculés. Pas de rubrique Example redondante. | Aucune. |
| C5 — Commentaires | Satisfait | Astuce des deux écritures développée et choix de la puissance quatrième expliqué ; attribution prudente et sourcée. | Aucune. |
| C6 — Prolongements | Satisfait | Question naturelle du filtre plus fort ; preuve complète pour F_5 et généralisation motivée pour n≥2 ; cadre cyclotomique avec factorisation explicite ; exemple 257 démontrant la limite du filtre ; lien commenté vers le critère d'Euler. | Aucune. |
| C7 — Sources et traçabilité | Satisfait | Cinq références localisées et consultées ; rôle des traductions explicite ; annonce et reconstruction séparées ; priorité de la preuve courte et communication originale de Lucas non revendiquées comme vérifiées. | Aucune. |
| Lisibilité et rendu effectif | Satisfait | Rendu du site à 1280 et 390 px : 112 expressions, aucune erreur KaTeX/JavaScript, aucune ancre manquante ni débordement. Contrôle visuel de la preuve, du tableau et des prolongements. | Aucune. |

## Contrôles mathématiques décisifs

| Énoncé ou calcul | Contrôle et résultat |
| --- | --- |
| F_5 et facteur | Calcul entier exact : 2^32+1 = 4 294 967 297 = 641 × 6 700 417. |
| Premières valeurs | Division d'essai jusqu'à la racine carrée : 3, 5, 17, 257 et 65 537 premiers. Cette observation ne remplace pas la preuve du contre-exemple. |
| Ordre | Si 2^t≡1, la division t=qd+r force r=0 ; ordre divisant 64 mais pas 32, donc égal à 64. L'imparité de p garantit −1≠1. |
| Filtre | Fermat implique que l'ordre divise p−1 ; condition nécessaire, jamais présentée comme suffisante. |
| Tableau | Parmi 64k+1, 1≤k≤10, seuls 193, 257, 449, 577, 641 sont premiers ; restes 109, 2, 325, 288, 0. |
| Deux carrés | 256² = 65 536 = 102×641+154 ; 154² = 23 716 = 37×641−1. |
| Preuve courte | 641 = 5⁴+2⁴ = 5×2⁷+1 ; substitution après puissance quatrième, sans inversion ni hypothèse de primalité de 641. |
| Lucas | r⁴≡−1 et r inversible donnent r²+r^(−2)≡0 puis (r+r^(−1))²≡2. Ce carré est non nul car p impair. Fermat appliqué à sa racine implique que l'ordre divise (p−1)/2. |
| Généralisation | Pour n≥2, ordre exactement 2^(n+1) et r=2^(2^(n−2)) ; pas d'exposant fractionnaire. Les cas n=0,1 ne sont pas inclus. Vérifications exactes complémentaires pour (n,p)=(2,17),(3,257),(4,65537),(5,641),(5,6700417),(6,274177). |
| Filtre renforcé et 257 | Seuls 257 et 641 sont premiers dans 128k+1 jusqu'à 641 ; ordre de 2 modulo 257 égal à 16, donc reste de F_5 égal à 2. |
| Corps modulo 641 | Division d'essai par les neuf premiers ≤25 : aucun diviseur. La primalité n'est utilisée que là où elle est nécessaire. |
| Scindement | 32 puissances impaires distinctes grâce à l'ordre 64 ; chacune a puissance 32 égale à −1 ; factorisation d'un polynôme unitaire de degré 32. Produit polynomial recalculé coefficient par coefficient modulo 641 : X^32+1. |
| Irréductibilité | Théorème cyclotomique général admis seulement dans le commentaire ; aucune preuve du résultat central n'en dépend. Irréductibilité, scindement modulo un premier et primalité d'une valeur ne sont pas confondus. |

Les calculs finis contrôlent les exemples et les identités ; la généralité des preuves repose sur les arguments ci-dessus, non sur l'échantillon testé.

## Contrôle des sources

| Affirmation historique ou outil | Source et passage contrôlés | Conclusion et limite |
| --- | --- | --- |
| 26 septembre 1732 et impression 1738 | E26, traduction Bell, p. 1, note bibliographique. | Dates de présentation et d'impression ; aucune date exacte de découverte affirmée. |
| Diviseur 641, contexte de Fermat | E26, pp. 1–2. | L'annonce contient le diviseur sans expliquer sa sélection. La liste 3,5,17,257,65537 est confirmée indépendamment par le calcul, sans reproduire la coquille 7 d'un passage de la traduction. |
| Recherche dans 64k+1 | E134, §§29–32 ; anglais pp. 8–9 et latin §32 (PDF p. 28). | Euler dit que le filtre a mené à k=10. La liste d'essais et les réductions modulaires sont une exposition moderne. |
| E134 écrit 1747, imprimé 1750 | Notice Euler Archive E134 et en-tête bibliographique du texte bilingue. | La rédaction rétrospective n'est pas confondue avec la découverte. |
| Astuce et attribution | Hardy–Wright, 6e éd., §2.5 p. 18 et notes p. 27. | La note attribue la preuve à Coxeter, suivant Kraitchik et Bennett ; l'édition de 1969 est mentionnée. L'invention exacte n'est pas datée. |
| Lucas et 27 janvier 1878 | Récréations mathématiques II, Note II p. 234, transcription anglaise ; notice EuDML 202543 pour l'édition 1883. | Attribution rapportée dans le propre ouvrage ultérieur de Lucas. Communication originale de 1878 non consultée. Les formules de la transcription ne sont pas reprises comme un théorème sur un exposant arbitraire : la portée F_n, n≥2 est démontrée dans l'article. |
| Théorie cyclotomique | Conrad, §1 et théorèmes 2.5, 2.8. | Définitions, irréductibilité et cadre des corps finis ; la spécialisation à 641 est démontrée directement. |

## Intégration et contrôles techniques

- Un article nouveau et sa fiche ; aucun changement des articles existants ni du schéma.
- Repères exclusivement dans l'en-tête généré ; six rubriques du modèle effectivement utilisées.
- Cinq références numérotées avec ancres ; relation vers un article déjà publié.
- Calculs exacts complémentaires consignés pendant la relecture.
- Rendu du site en développement : HTTP 200 ; cinq références, aucune ancre manquante ; lien vers le critère d’Euler en HTTP 200. Captures examinées sur ordinateur et mobile ; titres ciblés à environ 112 px sous le bord supérieur, visibles sous l’en-tête fixe.
- npm run validate : 6 articles, dont 5 publiés, OK. npm run build : OK ; 9 pages indexées par Pagefind.
- Version de production servie en HTTP 200, sans badge Draft, contrôlée à 1280 et 390 px : 112 expressions mathématiques, cinq références, aucune erreur KaTeX/JavaScript, aucune ancre manquante, aucun débordement. Le lien vers le critère d’Euler renvoie HTTP 200.
- Chronologie et sitemap contiennent le nouvel article ; brouillon Wilson et page math-qa exclus. Délimiteurs mathématiques équilibrés et git diff --check sans erreur.

## Décision

- **Décision : prêt à publier.**
- **Conclusion scientifique :** aucun défaut bloquant identifié après les corrections.
- **Éléments non vérifiés :** date d'invention exacte de l'astuce ; ouvrage de Coxeter et communication de Lucas de 1878 non consultés directement. L'article ne prétend pas les avoir établis ou consultés.
- **Défauts bloquants :** aucun identifié dans le périmètre examiné.
- **Vérification technique finale :** construction, rendu de production et présence dans la chronologie et le sitemap confirmés. Aucun contrôle bloquant restant dans le périmètre annoncé.
- **Amélioration facultative :** relecture humaine indépendante, particulièrement utile pour mesurer l'accessibilité des prolongements.
- **Contrôles à renouveler :** après toute modification substantielle d'une preuve, d'une attribution ou d'un prérequis.

## Attestation

> Pour la version identifiée par les empreintes finales, les contrôles décrits ont été effectués selon le référentiel v1.1. La décision est **prêt à publier**, fondée sur la relecture mathématique, les calculs exacts, les passages sources et le rendu effectif. Il s'agit d'une auto-relecture par IA, sans validation humaine indépendante. Les limites historiques sont consignées ci-dessus.


## Empreintes de la version validée

- **Blob Git de l’article :** d632fca2cee8c0e6cd1cb804de500c8a35e26845.
- **SHA-256 :** ae72dac1633ba505e4b87d2ca8f5f597480da1fd7cef9fc68465e467113a5327.
