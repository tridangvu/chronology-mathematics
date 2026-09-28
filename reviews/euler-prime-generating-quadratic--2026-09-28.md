# Fiche de validation — Euler’s quadratic

## Identification

- **Article / identifiant :** `euler-prime-generating-quadratic` ; `src/content/articles/euler-prime-generating-quadratic.md`.
- **Version examinée :** voir l’empreinte du fichier ci-dessous ; base du dépôt `25d0346438032ca9962ddc0d5dd113044bae0736`.
- **Date de relecture :** 28 septembre 2026.
- **Relecteur :** ChatGPT / Codex.
- **Nature :** auto-relecture entièrement réalisée par IA ; même assistant que pour la rédaction, sans relecture humaine indépendante ni essai auprès de lecteurs.
- **Référentiel :** [v1.1](../docs/quality-reference.md), critères C0–C7 et lisibilité/intégrité.
- **Public principal :** lecteur connaissant divisibilité, congruences, factorisation première dans les entiers et complétion du carré.
- **Prérequis avancés :** corps quadratiques, anneaux, idéaux et quotients pour les commentaires ; calcul asymptotique élémentaire et intégration pour la fréquence conjecturale. Les théorèmes généraux admis sont identifiés.
- **Périmètre :** texte complet, raisonnement, calculs décisifs, passages sources cités, intégration des métadonnées, rendu effectif et navigation en navigateur à 1280 et 390 pixels de large ; validation et construction Astro.

## Contrat pédagogique

- **Le lecteur sait déjà :** utiliser une congruence pour exclure un diviseur et décomposer un entier en facteurs premiers.
- **Il cherche à comprendre ou à faire :** rechercher une quadratique riche en valeurs premières et expliquer les quarante valeurs de l’exemple d’Euler.
- **La difficulté est :** choisir les coefficients sans connaître la réponse et remplacer quarante tests isolés par un mécanisme commun.
- **L’idée nouvelle consiste à :** filtrer les constantes par congruences, puis réduire l’indice par symétrie pour forcer un diviseur premier plus petit que celui choisi minimal.
- **Après lecture, il saura :** reproduire une recherche de candidats, prouver la série de quarante nombres premiers et distinguer l’explication par les normes des conjectures sur l’infinité et la fréquence.

## Évaluation argumentée

| Critère | État | Passage ou contrôle justifiant l’évaluation | Correction nécessaire |
| --- | --- | --- | --- |
| C0 — Repères et périmètre | Satisfait | Frontmatter : titre, résumé, Euler, domaines, [1772], précision uncertain et note distinguant 1774 ; prerequisiteNotes sépare les trois niveaux de lecture. | Aucune. |
| C1 — Motivation et histoire | Satisfait | Deux questions initiales explicites ; lettre 112 lue ; la recherche est annoncée comme reconstruction. Fenêtre de recherche jusqu’à 50 et échec de 47, sans attribution à Euler. | Aucune. |
| C2 — Énoncé ou définition | Satisfait | Intervalle 0–39, valeurs distinctes, variante décalée 1–40, constante +41 et premier échec clairement indiqués. | Aucune. |
| C3 — Démarche et justification complète | Satisfait | Normalisation de la famille, crible, discriminant, seuil sqrt(163/3), symétrie, minimalité et bornes relus ; conclusion complète, indépendante des commentaires. Relation au raisonnement moderne de Pollack–Snyder indiquée. | Aucune. |
| C4 — Exemple | Satisfait | Exemples intégrés ; tableau des constantes 11, 17, 41, 47 et tableau des résidus recalculés. Pas de rubrique Example vide. | Aucune. |
| C5 — Commentaires | Satisfait | Identité de norme, petite norme impossible, morphisme vers F_p, rôle de la principalité puis preuve de h=1. Minkowski et les autres résultats généraux sont admis explicitement. Frobenius–Rabinowitsch porte sur un ordre, puis passage justifié à l’anneau des entiers. | Aucune. |
| C6 — Prolongements | Satisfait | Conjectures annoncées comme telles et datées ; constante exacte conservée dans l’équivalent ; facteur 1/2 expliqué ; moyennes distinguées du polynôme fixé ; trois liens de lecture commentés. | Aucune. |
| C7 — Sources et traçabilité | Satisfait dans le périmètre cité | Huit sources effectivement consultées, rôle et localisation précis ; datation critique préférée à la métadonnée discordante de l’archive ; limites de consultation déclarées. | Aucune. |
| Lisibilité et rendu effectif | Satisfait | Rendu navigateur 1280/390 px : aucune erreur KaTeX, aucune ancre interne manquante, aucune largeur globale excédentaire ; contrôles visuels de l’en-tête, de la preuve, des commentaires et de la fréquence. Titres du sommaire sans duplication mathématique ; marge d’ancrage sous l’en-tête fixe. | Aucune. |

## Contrôles décisifs

| Passage contrôlé | Méthode / résultat | Conclusion |
| --- | --- | --- |
| Normalisation | Développement symbolique de g(n−k) ; contrôles exacts complémentaires pour plusieurs entiers k,c,n. | Constante c−k(k+1) correcte ; portée limitée aux quadratiques moniques à coefficient linéaire impair. |
| Crible des constantes | Énumération des premiers 5<a≤50 et des classes modulo 3 et 5. | Survivants 11,17,41,47 ; f_47(1)=49. |
| Tableau des séries | Division d’essai exacte jusqu’au premier échec. | Longueurs 10,16,40,1 ; échecs 121,289,1681,49. |
| Série d’Euler | Division d’essai pour n=0,…,39, en complément de la preuve. | Toutes les valeurs sont premières ; f(39)=1601 et f(40)=1681. |
| Descente | Relecture logique : plus petit premier divisant une valeur ; root representative s et q−1−s ; q<f(r)<q². | f(r)=qm avec 1<m<q contredit la minimalité. Aucune circularité ; l’argument exclut tout premier inférieur à 41. |
| Petits diviseurs | Toutes les classes modulo 2,3,5,7 évaluées. | Aucun zéro. Le seuil q²>163/3 explique exactement ces quatre contrôles. |
| Norme | Conjugaison et complétion du carré recalculées. | Pour y≠0, norme entière ≥41 ; pour y=0, carré. Aucune norme première <41. |
| Principalité | Quotient O_K/I ≅ F_p via omega↦−r ; N((alpha))=abs(N(alpha)). | Petit diviseur ⇒ idéal de norme p ⇒ élément de norme p si principal ⇒ contradiction. |
| Nombre de classes | Borne 2sqrt(163)/pi≈8,127817 ; quotients modulo 2,3,5,7 et factorisation unique des idéaux. | Seuls O_K et (2) ont norme ≤8 ; tous deux principaux ; h=1. |
| Classification | Énoncé de Pollack–Snyder avec x=n+1 ; restriction de la liste de Milne aux discriminants fondamentaux 1−4a≤−7. | Liste a=2,3,5,11,17,41 ; aucun plafond universel de 40 affirmé. |
| Facteurs de Bateman–Horn | Formule du discriminant et contrôle exact de rho_f(p) pour les premiers ≤199, notamment p=163. | rho_f(2)=0 ; rho_f(p)=1+(-163/p) pour p impair. |
| Équivalent | Comparaison aux équations (6.4.4)–(6.4.6) de la source 6. | Constante symbolique C_f/2 dans l’équivalent ; 3,32 seulement comme approximation. Prédiction explicitement conjecturale. |

Les calculs finis confirment les exemples ; la validation de la démonstration repose sur la relecture de ses dépendances et de ses arguments.

## Contrôle des sources

Les identifiants ci-dessous correspondent aux références de l’article. Les liens sont consultables dans son frontmatter et sa bibliographie.

| Affirmation examinée | Référence et localisation | Conclusion du contrôle |
| --- | --- | --- |
| Auteur, destinataire, expression et absence de procédure dans l’extrait | Fellmann–Mikhajlov, lettre 112 / R 233, pp. 817–818 (PDF 828–829). Texte français et notice éditoriale consultés. | Johann III Bernoulli ; dernier paragraphe sur 41−x+x² ; pas de méthode de découverte exposée dans cet extrait. Cela ne prétend pas exclure l’existence d’autres documents. |
| [1772] et publication 1774 | Même notice, en-tête [Petersburg,1772], mention de l’absence de date ; notice Euler Archive E461. | Datation éditoriale, année du volume et année d’impression distinguées. Le champ Written Date=1774 de l’archive ne sert pas de preuve d’une découverte en 1774. |
| Original historique | E461, volume pour 1772, pp. 35–36, imprimé en 1774. | Notice bibliographique consultée ; scan original non consulté, explicitement indiqué. Le texte lui-même est disponible dans l’édition critique utilisée. |
| Descente moderne et Frobenius–Rabinowitsch | Pollack–Snyder, PDF pp. 1–4 : Theorem 1, Example (ii), §2 et dernière remarque. Métadonnées du journal contrôlées : Monthly 128 (2021), 554–558. | Mécanisme apparenté identifié, sans revendication d’originalité ; équivalence exacte pour l’ordre et dates 1912/1913 confirmées par cette source moderne. Articles historiques de 1912/1913 non consultés. |
| Anneau des entiers, normes, idéaux, Minkowski | Milne v3.08 (2020), Chapters 2–4, Propositions 4.1(c), 4.2(a), Theorem 4.3, pp. 68–70. | Résultats effectivement suffisants ; la référence aux normes a été précisée après contrôle du numéro exact des propositions. |
| Classification de nombre de classes un | Milne, Aside 4.30, p. 83. | Neuf corps imaginaires et contexte Heegner/Baker/Stark ; seuls les six discriminants admissibles pour a≥2 sont retenus. Théorème profond explicitement admis. |
| Borne sur les normes | Perrin, §2.3.1, p. 12 ; §§2.3–2.4 pour le contexte algébrique. | Forme x²+xy+41y² et borne 41 confirmées et recalculées. Cette source n’est pas utilisée comme autorité de datation historique. |
| Bunyakovsky et 1854 | Conrad, §2, Conjecture 2.3 et pp. 2–3 ; corroboration dans Aletheia-Zomlefer–Fukshansky–Garcia. | Hypothèses et statut conjectural exacts. |
| Bateman–Horn, 1962, facteurs et constante | Aletheia-Zomlefer–Fukshansky–Garcia, §§3.6,6.4, équations (6.4.4)–(6.4.6), PDF p. 29. Métadonnées de publication confrontées au site de l’auteur et de l’éditeur. | C_f≈6,64, C_f/2≈3,32. Valeur citée, pas revendiquée comme recalcul indépendant du produit infini. |
| Statut contemporain et portée des moyennes | Kravitz–Woo–Xu, arXiv:2512.03292v1, 2 décembre 2025, §§1.1–1.2 ; recherche complémentaire lors de la relecture. | L’introduction indique qu’aucun cas non linéaire fixé de l’infinité de Bunyakovsky n’est résolu ; résultats moyennés distingués de ce problème. Prépublication identifiée comme telle, sans présenter une revue exhaustive de toute la littérature jusqu’à septembre 2026. |

## Intégration technique

- Article conforme aux six rubriques effectivement utilisées ; repères et prérequis dans l’en-tête, sans section Landmarks dans le corps.
- Champ optionnel `prerequisiteNotes` ajouté au schéma, au modèle et au guide pour annoncer les connaissances requises sans inventer d’identifiants d’articles ; affichage dans l’en-tête des prérequis.
- Relations vers deux articles publiés ; liens internes sous la base GitHub Pages du projet.
- Références du corps reliées aux huit ancres de bibliographie.
- Marge de défilement pour garder titres et références accessibles sous l’en-tête fixe.
- Contrôles de contenu, délimiteurs mathématiques, navigation et largeur de page effectués ; aucun test auprès d’un lecteur humain n’est revendiqué.
- `npm run validate` : 5 articles, dont 4 publiés, OK. `npm run build` : construction propre depuis un cache Astro recréé, OK ; 8 pages indexées par Pagefind.
- Prévisualisation du build de production : article servi en HTTP 200 sans badge draft ; 221 expressions mathématiques, 8 références, aucune erreur JavaScript/KaTeX ni ancre manquante ; largeur globale de 1280/390 px conforme aux deux écrans testés. Liens vers les deux articles connexes : HTTP 200.
- Chronologie et sitemap contiennent le nouvel article ; brouillon Wilson et page math-qa toujours exclus de la production. Les titres ciblés sont visibles sous l’en-tête fixe (position verticale de 112 px dans les deux vues).

## Décision

- **Décision : prêt à publier.**
- **Justification :** correction de l’équivalent effectuée ; recherche et preuve mieux motivées ; commentaires réorganisés ; sources confrontées aux passages pertinents ; aucun défaut bloquant repéré dans le périmètre contrôlé.
- **Défauts bloquants :** aucun identifié.
- **Éléments non vérifiés :** scan du journal de 1774 et originaux de Frobenius/Rabinowitsch ; preuves intégrales des théorèmes admis et de la prépublication récente ; précision numérique du produit infini non recalculée. Ces limites sont explicites et ne remplacent aucune preuve promise par l’article.
- **Améliorations facultatives :** une future relecture humaine indépendante et un retour de lecteur pourraient affiner l’exposition.
- **Contrôles à renouveler :** toute modification substantielle de la preuve, de l’énoncé, des attributions ou des commentaires ; actualiser le statut des conjectures lors d’une révision ultérieure.

## Attestation

> Pour la version identifiée par l’empreinte ci-dessous, j’ai effectué les contrôles décrits selon le référentiel v1.1. La décision est **prêt à publier**, fondée sur la relecture mathématique, les calculs exacts, les passages sources et le contrôle du rendu. Il s’agit d’une auto-relecture par IA, sans validation humaine indépendante. Les limites de consultation sont consignées ci-dessus.

## Empreinte de la version validée

- **Blob Git de l’article :** `b120251c4ba46096a973d53f318a8e13dcc68c2c`.
- **SHA-256 :** `45726e55dc1fffc10726fd91e2ddb0e704936fa76ecc97206c3b423cdbbff4e6`.
