> **Statut dans le dépôt.** Document autoritatif de qualité des articles (**v1.1**).
> English project docs point here; the French text is the source of truth.
> Validation sheet template: [`quality-validation-sheet.md`](./quality-validation-sheet.md).
> Completed reviews: [`../reviews/`](../reviews/). Sheets written under older criteria live in [`../reviews/archive/`](../reviews/archive/) and are **not** validations under v1.1.

# Référentiel de qualité des articles — Chronologie mathématique

Version 1.1 — 16 septembre 2026.

Ce document sert à concevoir, rédiger et relire les articles du projet, puis à consigner une appréciation justifiée de leur qualité. Il s’applique aux articles consacrés à un résultat, une définition, une méthode, une construction ou un contre-exemple.

## Principe directeur

**Un article est réussi lorsque le lecteur visé comprend un problème, acquiert une idée mathématique nouvelle, comprend pourquoi elle fonctionne et sait reconnaître ce qu’elle permet de faire.**

La priorité du projet est l’apprentissage des mathématiques. La chronologie organise leur apparition et leurs relations ; le contexte historique éclaire leur raison d’être. L’exhaustivité historique n’est pas exigée. En revanche, les faits historiques effectivement avancés doivent être exacts, sourcés et distingués des reconstructions pédagogiques.

La qualité se mesure au contenu effectivement transmis. La longueur de l’article, le nombre de références et la présence de toutes les rubriques ne constituent pas, à eux seuls, des preuves de qualité.

## Décisions éditoriales (v1.1)

Ces décisions orientent l’exposition et complètent le principe directeur :

1. **Langage moderne autorisé d’emblée.** Un résultat ancien peut être énoncé et démontré directement en langage moderne. Il n’est pas obligatoire de reconstituer d’abord la formulation historique.
2. **Une preuve principale, choisie pour sa clarté.** La preuve principale peut être une preuve historique modernisée **ou** une preuve moderne différente. On choisit l’exposition la plus éclairante et l’on indique explicitement sa relation à la contribution historique (reformulation, modernisation d’une preuve publiée, autre stratégie, etc.).
3. **Pas de double présentation obligatoire.** Il n’est pas demandé de présenter d’abord une version historique puis une version moderne. Une seule exposition cohérente suffit.
4. **Justification complète dans « Approach and proof ».** La justification complète appartient à la rubrique **Approach and proof** (ou à son équivalent regroupé). Elle est **complète relativement aux prérequis annoncés** et aux résultats auxiliaires **explicitement admis**. On n’exige pas de redémontrer les fondements de ces prérequis.
5. **Example (facultatif).** L’ancienne rubrique « Immediate payoff » devient **Example**. Elle est optionnelle ; un exemple peut aussi être intégré ailleurs (énoncé, preuve, commentaires). S’il est intégré ailleurs, le contenu correspondant reste évalué sous le critère C4.
6. **Comments (facultatif).** L’ancienne rubrique « Modern viewpoint » devient **Comments**. Elle est optionnelle (remarques, variantes, point de vue structurel, limites). Si des commentaires sont intégrés ailleurs, le contenu correspondant reste évalué sous C5.
7. **Exactitude, fidélité historique et traçabilité.** Ces exigences s’appliquent à l’ensemble de l’article, indépendamment du choix d’une preuve modernisée ou d’une preuve moderne différente.

## Structure type d’un article

Sur le site anglais, les titres de section sont en anglais. Le modèle adaptable ci-dessous guide la rédaction ; les rubriques peuvent être regroupées lorsque cela améliore l’exposition, et les rubriques optionnelles vides sont omises. **Pas de titres vides ni de remplissage.**

| Rubrique (EN) | Fonction | Obligatoire ? |
| --- | --- | --- |
| **Landmarks** | Cadrage : titre, résumé, auteurs, domaine, dates, prérequis — via le **frontmatter / en-tête du site**. Ne **pas** dupliquer ces informations dans le corps. | Métadonnées oui ; **pas** de section corps « Landmarks » (commentaire HTML court autorisé dans le modèle). |
| **Motivation and history** | Problème, obstacle, contexte historique (C1). | Oui (ou regroupement identifiable). |
| **Statement or definition** | Apport mathématique en langage moderne (C2). | Oui (ou regroupement identifiable). |
| **Approach and proof** | Idée centrale + **justification complète** relative aux prérequis et résultats admis (C3). | Oui (cœur pédagogique). |
| **Example** | Illustration ou application immédiate (C4). | **Optionnel** — omettre si vide. |
| **Comments** | Remarques, variantes, éclairage moderne complémentaire (C5). | **Optionnel** — omettre si vide. |
| **Later developments** | Prolongements et liens typés (C6). | Oui (ou regroupement identifiable). |
| **Sources** | Références et traçabilité (C7). | Oui (souvent aussi via frontmatter `references`). |

Les fonctions des rubriques regroupées doivent rester identifiables à la relecture. L’omission d’une rubrique optionnelle vide est normale ; elle peut entraîner l’état **Non applicable** pour C4 ou C5 lorsque aucun contenu correspondant n’existe ailleurs non plus.

## Mode d’emploi

Avant la rédaction, définir le lecteur visé, le problème central et l’acquis attendu. Pendant la rédaction, utiliser les critères C0 à C7. Après rédaction, remplir la fiche de validation ([`quality-validation-sheet.md`](./quality-validation-sheet.md)) et la déposer sous `reviews/`.

L’évaluation porte sur une version précise de l’article. Pour chaque critère, le relecteur indique un état et une justification localisée :

| État | Signification |
| --- | --- |
| Satisfait | L’exigence est remplie et le contrôle effectué est explicité. |
| Partiel | Une partie de l’exigence est remplie ; ce qui manque est identifié. |
| Non satisfait | Un défaut précis empêche de remplir l’exigence. |
| Non vérifié | Le contrôle n’a pas été effectué ou les éléments disponibles ne permettent pas de conclure. |
| Non applicable | L’exigence n’a pas de fonction pour cet article ; la raison est donnée. (Usage typique pour C4/C5 lorsque Example/Comments sont absents et non intégrés ailleurs.) |

« Satisfait » doit renvoyer à un passage, un calcul, une référence ou une vérification concrète. Une simple déclaration de l’auteur ne suffit pas à attester la qualité.

## C0 — Repères, public et périmètre

**Objectif : le lecteur sait ce qu’il va apprendre et de quelles connaissances il a besoin.**

Les repères (titre, résumé, auteurs historiques, domaine, dates / landmark, prérequis) sont fournis par le frontmatter et l’en-tête du site. Ils ne sont pas recopiés dans une section corps « Landmarks ».

Critères :

- Le titre désigne un apport mathématique suffisamment précis.
- Le résumé annonce le problème et le gain attendu.
- Les prérequis correspondent aux outils réellement employés dans le corps principal (notamment dans **Approach and proof**). Les prérequis supplémentaires éventuels d’un commentaire ou d’une remarque avancée sont distingués.
- Les dates et attributions ont une signification explicite : formulation, publication, démonstration, généralisation, etc. Une incertitude est conservée comme telle.
- Le périmètre est maîtrisé : l’article possède une idée centrale identifiable. Les résultats secondaires servent cette idée.

**Vérification :** compléter ces cinq phrases sans employer de formulations vagues telles que « mieux comprendre le sujet » :

1. Le lecteur sait déjà…
2. Il cherche à comprendre ou à faire…
3. La difficulté est…
4. L’idée nouvelle consiste à…
5. Après lecture, il saura…

Les informations de cadrage ne doivent pas révéler d’écart majeur entre les connaissances annoncées et celles effectivement requises.

## C1 — Motivation and history (problème et contexte)

**Objectif : le lecteur comprend clairement la raison d’être de l’article avant de connaître la solution.**

Critères :

- Le problème est formulé assez précisément pour qu’on reconnaisse ce qui constituerait une réponse.
- Son intérêt est accessible avec les prérequis annoncés.
- L’obstacle est expliqué (impossibilité, méthode trop lourde, manque d’unification, compréhension insuffisante, etc.).
- Un exemple ou une situation explicite rend l’objectif concret lorsque l’énoncé général ne suffit pas (cet exemple peut aussi figurer sous **Example** ou ailleurs).
- Le contexte historique contribue à comprendre le problème et les outils disponibles. Les affirmations sur les motivations effectives d’un auteur sont documentées.
- Une motivation reconstruite pour le lecteur est présentée comme telle, sans être attribuée indûment aux acteurs historiques.

**Vérification :** après avoir lu uniquement cette partie, peut-on reformuler le problème, reconnaître la difficulté et expliquer pourquoi une nouvelle idée serait utile ?

**Insuffisance typique :** annoncer qu’une notion est « fondamentale » ou « très utilisée aujourd’hui » sans rendre intelligible la question à laquelle elle répond.

## C2 — Statement or definition (résultat ou notion)

**Objectif : le lecteur sait exactement quel apport mathématique est présenté.**

Critères :

- L’énoncé ou la définition est formulé en langage moderne, avec les objets, domaines, hypothèses et quantificateurs nécessaires. Un résultat ancien **peut** être énoncé ainsi d’emblée.
- La portée de l’apport est claire : existence, unicité, classification, procédure, critère, nouvelle notion, impossibilité, etc.
- Les notations sont définies avant leur utilisation et restent cohérentes.
- Un exemple permet de lire l’énoncé ou de reconnaître les objets définis lorsqu’il est utile (rubrique **Example** ou intégration locale).
- L’article distingue la contribution historique de la version exposée : changement de notation, reformulation équivalente, restriction pédagogique, extension de généralité ou correction ultérieure — **sans** imposer une double présentation historique puis moderne.
- La description de ce qui a été accompli n’attribue pas rétrospectivement aux auteurs les concepts introduits seulement dans la relecture moderne.

Pour une définition, expliquer ce qu’elle rassemble ou distingue. Pour un algorithme, préciser entrées, sorties et conditions de validité ou de terminaison pertinentes.

**Vérification :** le lecteur peut-il reformuler l’apport sans ambiguïté et décider s’il s’applique à un exemple proposé ?

**Insuffisance typique :** présenter une formule correcte sans préciser à quels objets elle s’applique ou ce qu’elle affirme.

## C3 — Approach and proof (idée, raisonnement et justification complète)

**Objectif : le lecteur acquiert le mécanisme d’une idée, une manière de raisonner, et une justification mathématique complète relativement aux prérequis déclarés. Cette partie constitue le cœur pédagogique de l’article.**

Ce critère absorbe l’exigence de **justification complète** autrefois associée à une rubrique « Modern viewpoint » / C5 distincte. La rigueur et la complétude des dépendances se contrôlent **ici**, dans la preuve principale (ou son regroupement).

Critères :

- L’idée directrice est identifiable et articulée au problème initial.
- La preuve possède une progression compréhensible : objectifs intermédiaires et leur contribution au résultat.
- Les constructions décisives sont motivées.
- Les notations sont allégées lorsque cela facilite la lecture, sans supprimer une distinction nécessaire.
- Les étapes difficiles sont développées ; les détails routiniers peuvent être abrégés si le lecteur visé peut les reconstituer.
- Les exemples illustrent les étapes utiles ; ils ne tiennent pas lieu de démonstration d’un énoncé général.
- **Dépendances explicites :** ce qui est démontré, ce qui est déjà connu (prérequis) et ce qui est **admis** (résultats auxiliaires nommés) sont reconnaissables.
- **Justification complète relative** aux prérequis annoncés et aux résultats admis : un lecteur qualifié peut retracer les dépendances substantielles et vérifier chaque passage décisif sans devoir inventer un argument manquant. Il n’est pas demandé de redémontrer les fondements des prérequis ; il faut vérifier que les résultats invoqués suffisent et qu’aucune dépendance n’est circulaire.
- **Passage décisif :** le passage décisif annoncé comme objet de l’article doit être expliqué ; un renvoi à un futur article ne suffit pas.
- **Statut de l’exposition annoncé :** preuve historique modernisée, autre preuve moderne, chemin de découverte documenté, ou reconstruction pédagogique — et **relation** à la contribution historique.
- Une reconstruction peut rendre une construction intelligible sans prétendre qu’elle était inévitable. L’article n’invente pas d’essais ou d’intentions d’auteur.
- Une affirmation provisoirement admise ou une heuristique est signalée dès sa première apparition. On ne corrige pas silencieusement un énoncé faux : on corrige l’énoncé.

**Vérification :** le lecteur devrait pouvoir répondre :

- Quelle est l’idée décisive ?
- Pourquoi introduit-on les principaux objets auxiliaires ?
- Où intervient l’hypothèse importante ?
- Comment refaire le raisonnement dans un cas simple ?
- Dans quel problème voisin pourrait-on essayer la même idée ?
- Les dépendances substantielles sont-elles toutes tracées jusqu’aux prérequis ou résultats admis ?

**Insuffisance typique :** une suite de calculs valides sans but clair ; une explication intuitive qui masque le passage décisif ; une lacune dans le passage décisif sans résultat admis explicitement nommé ; annoncer comme objet de l’article un passage décisif puis le renvoyer à un futur article sans l’expliquer ici.

## C4 — Example (optionnel)

**Objectif : le lecteur constate concrètement le gain ou sait lire l’apport sur un cas.**

La rubrique **Example** est optionnelle. Elle peut être omise. Un exemple ou une application peut aussi être intégré dans Motivation, Statement, Approach and proof ou Comments ; **dans ce cas, le contenu reste évalué sous C4**.

Critères (lorsque du contenu d’exemple / d’application existe) :

- Un exemple, une application ou une illustration met en jeu l’idée centrale ou aide à lire l’énoncé.
- Le cas est assez simple pour être suivi avec les outils de l’article.
- Le gain est explicite lorsqu’il s’agit d’une application (calcul simplifié, existence, obstruction reconnue, etc.), et mené jusqu’à une conclusion interprétée.
- Les limites de l’outil sont indiquées lorsqu’elles évitent une extrapolation abusive.

Si aucun exemple ni application n’apparaît nulle part et que l’article n’en a pas besoin pour son objectif (par exemple une note très courte, ou un énoncé déjà transparent), C4 peut être **Non applicable** avec justification.

**Vérification :** peut-on montrer où l’article rend l’apport concret, ou justifier pourquoi aucun exemple n’est requis ?

**Insuffisance typique :** annoncer une liste d’applications sans en expliquer aucune ; ou laisser C4 « Satisfait » alors qu’aucun contenu correspondant n’existe.

## C5 — Comments (optionnel)

**Objectif : le lecteur dispose, le cas échéant, de remarques utiles (variantes, éclairage structurel, limites, liens conceptuels) sans confusion avec la preuve principale.**

La rubrique **Comments** est optionnelle. Elle remplace l’ancienne « Modern viewpoint » : elle **n’est plus** le siège obligatoire de la justification complète (celle-ci relève de C3). Des commentaires peuvent être intégrés ailleurs ; le contenu correspondant reste alors évalué sous C5.

Critères (lorsque du contenu de commentaire existe) :

- Les remarques apportent un éclairage identifiable (variante de preuve, abstraction unificatrice, limite, mise en garde, lien conceptuel).
- Les prérequis supplémentaires éventuels sont indiqués.
- Les images intuitives sont reliées à des énoncés exacts lorsque c’est utile ; leur portée est précisée.
- Les commentaires ne se substituent pas à une justification manquante dans **Approach and proof**.

Si aucun commentaire n’apparaît nulle part, C5 peut être **Non applicable** avec justification.

**Vérification :** les commentaires (s’il y en a) clarifient-ils sans diluer ni corriger en silence le corps principal ?

**Insuffisance typique :** ajouter des termes abstraits sans correspondance avec les constructions précédentes ; ou faire porter sur C5 une preuve absente de C3.

## C6 — Later developments (prolongements et liens)

**Objectif : le lecteur comprend quelles questions viennent naturellement ensuite.**

Critères :

- Les prolongements partent d’une limite, d’un cas non traité, d’une question nouvelle ou d’une idée réutilisable.
- Les liens précisent leur nature : généralisation, autre preuve, application, obstacle résolu, conjecture ou prérequis complémentaire.
- Chaque lien significatif explique en une phrase pourquoi il mérite d’être suivi.
- Les conjectures distinguent le statut à l’époque considérée et le statut contemporain lorsqu’il est mentionné (vérifié et daté).
- Les développements postérieurs à la période principale du site sont signalés comme tels.
- Un article encore à rédiger est une piste future, non un lien mort vers une ressource inexistante.

**Vérification :** le lecteur peut-il expliquer pourquoi l’un des articles proposés constitue une suite naturelle ?

**Insuffisance typique :** une liste de sujets du même domaine sans relation mathématique explicitée.

## C7 — Sources (sources et traçabilité)

**Objectif : les faits avancés et les références utilisées peuvent être contrôlés.**

Critères :

- Chaque affirmation historique substantielle — date, attribution, priorité, influence, motivation, contenu d’un texte — renvoie à une source qui la soutient effectivement.
- Une priorité telle que « première preuve » est justifiée ; à défaut, formulation plus prudente.
- Les références permettent l’identification, avec localisation précise lorsque nécessaire.
- Les rôles des sources sont distingués : texte original, traduction, étude historique, exposition mathématique moderne.
- La référence de la version ou de la preuve reprise est indiquée. Les calculs autonomes de l’article n’exigent pas chacun une référence extérieure.
- Les écarts entre sources, attributions discutées et incertitudes pertinentes sont mentionnés.
- La bibliographie correspond à des sources réellement utilisées. Une référence non consultée est indiquée comme telle.
- Les citations littérales sont identifiées ; les adaptations sont signalées.

Il n’est pas exigé de consulter systématiquement tous les textes originaux. Une source historique spécialisée peut suffire si elle soutient précisément l’affirmation.

**Vérification :** pour chaque affirmation historique importante, peut-on retrouver le passage pertinent et comparer sa portée à celle de l’article ?

**Insuffisance typique :** une bibliographie générale dont aucun passage n’étaye les dates, attributions ou motivations annoncées.

## Lisibilité et intégrité de la présentation

Ces exigences s’appliquent à l’ensemble de l’article :

- La notation est stable et chaque symbole utile est défini.
- Les paragraphes et les calculs suivent une progression explicite.
- Les formules sont intégrées au raisonnement et leur résultat est interprété.
- Dans les fichiers sources, les formules en ligne utilisent `\( ... \)` et les formules affichées `\[ ... \]`.
- Les longues expressions sont découpées en étapes lisibles ; le texte explicatif ordinaire reste hors des blocs mathématiques.
- Les énoncés, preuves, exemples, remarques et résultats admis sont reconnaissables.
- Les schémas ou figures éventuels ont une fonction précise, des conventions explicites et une légende.
- Le rendu réel est contrôlé : formules, liens, ancres, tableaux et lecture sur écran étroit. Une validation du fichier source seule ne suffit pas.
- Pas de titres de section vides ni de prose de remplissage destinée seulement à « compléter » le modèle.

Une prose élégante ne compense pas un défaut mathématique ; une preuve exacte doit aussi être lisible par le public annoncé.

## Procédure de relecture

1. **Fixer le périmètre.** Identifier la version examinée, le niveau visé, le résultat central et les sources accessibles.
2. **Examiner la progression pédagogique.** Reconstituer le problème, l’obstacle, l’idée et le gain sans recopier le résumé de l’auteur.
3. **Contrôler les mathématiques (C3 au centre).** Vérifier les hypothèses, chaque passage décisif, les résultats admis, l’absence de circularité ; refaire les calculs centraux et l’exemple / application s’il en existe (C4).
4. **Contrôler les faits historiques.** Comparer les affirmations substantielles aux passages sources. Consigner séparément les éléments non vérifiés.
5. **Examiner les prolongements, commentaires éventuels et le rendu.** Vérifier le sens des liens (C6), l’utilité des comments (C5) s’il y en a, et la présentation affichée.
6. **Consigner une décision.** Justifier les états attribués (y compris **Non applicable** pour C4/C5 le cas échéant) et distinguer corrections indispensables et améliorations facultatives.

Une relecture assistée par une IA doit être identifiée comme telle. Elle ne doit pas être présentée comme une relecture humaine indépendante. Une estimation d’intelligibilité ne constitue pas un essai auprès de lecteurs : si un tel essai a eu lieu, indiquer le profil, la tâche et le résultat observé.

## Décision éditoriale

**Prêt à publier** : les exigences essentielles applicables sont satisfaites, les passages décisifs et faits historiques substantiels ont été vérifiés, et aucun défaut bloquant n’est ouvert. L’absence de rubriques **Example** ou **Comments** n’est pas bloquante en soi si C4/C5 sont justement **Non applicable** ou couverts ailleurs.

**À réviser** : un défaut identifié compromet l’objectif pédagogique, la validité mathématique, la fidélité historique ou l’accès au contenu.

**Évaluation incomplète** : les éléments ou contrôles disponibles ne permettent pas encore de conclure. Préciser ce qui reste à vérifier.

Sont notamment bloquants :

- Un problème ou un apport central impossible à identifier.
- Un énoncé faux, ambigu de manière substantielle ou privé d’une hypothèse nécessaire.
- Une lacune dans le passage décisif, sans résultat admis explicitement identifié pour la combler.
- Un passage décisif annoncé comme objet de l’article qui n’est pas expliqué (un renvoi à un futur article ne suffit pas).
- Une dépendance circulaire.
- Une reconstruction pédagogique présentée comme un fait historique.
- Une attribution, une citation ou une date importante non étayée.
- Une application ou un exemple central incorrect (lorsqu’il est présent).
- Une présentation qui rend une partie essentielle illisible.

Les imperfections mineures de style peuvent être consignées sans bloquer la publication. Une note globale ou une moyenne ne peut pas compenser un défaut bloquant.

L’attestation décrit les contrôles accomplis sur une version précise. Après une modification substantielle d’un énoncé, d’une preuve, d’une attribution ou d’une application, les contrôles correspondants doivent être renouvelés.

Les fiches rédigées sous une version antérieure du référentiel (notamment v1.0) ne valident pas une publication au titre de la v1.1 ; elles peuvent être conservées dans `reviews/archive/` à titre d’archive uniquement.

## Fiche de validation à compléter

Copier la fiche modèle [`quality-validation-sheet.md`](./quality-validation-sheet.md) pour chaque relecture (ou la table ci-dessous). Conserver les justifications et la décision avec l’identifiant de version de l’article.

### Identification

- **Article / identifiant :**
- **Version examinée :** commit Git, version du fichier ou autre repère non ambigu.
- **Date de relecture :**
- **Relecteur :**
- **Nature de la relecture :** humaine, assistée par IA ou entièrement automatisée.
- **Référentiel :** v1.1
- **Public et prérequis principaux :**
- **Prérequis supplémentaires (comments / remarques avancées), le cas échéant :**
- **Périmètre effectivement examiné :**

### Contrat pédagogique

- **Le lecteur sait déjà :**
- **Il cherche à comprendre ou à faire :**
- **La difficulté est :**
- **L’idée nouvelle consiste à :**
- **Après lecture, il saura :**

### Évaluation argumentée

| Critère | État | Passage ou contrôle justifiant l’évaluation | Correction nécessaire |
| --- | --- | --- | --- |
| C0 — Repères et périmètre | À compléter | | |
| C1 — Motivation and history | À compléter | | |
| C2 — Statement or definition | À compléter | | |
| C3 — Approach and proof (idée + justification complète) | À compléter | | |
| C4 — Example (optionnel ; peut être Non applicable) | À compléter | | |
| C5 — Comments (optionnel ; peut être Non applicable) | À compléter | | |
| C6 — Later developments | À compléter | | |
| C7 — Sources et traçabilité | À compléter | | |
| Lisibilité et rendu effectif | À compléter | | |

### Contrôles décisifs

| Énoncé, calcul ou passage contrôlé | Méthode du contrôle / résultat invoqué | Résultat et réserve éventuelle |
| --- | --- | --- |
| À compléter | | |

### Contrôle des sources

| Affirmation historique examinée | Référence et localisation | Passage consulté et conclusion du contrôle |
| --- | --- | --- |
| À compléter | | |

### Décision

- **Décision :** prêt à publier / à réviser / évaluation incomplète.
- **Justification synthétique :**
- **Défauts bloquants :**
- **Éléments non vérifiés :**
- **Améliorations facultatives :**
- **Contrôles à renouveler après correction :**

### Formule d’attestation

> Pour la version identifiée ci-dessus, j’ai effectué les contrôles décrits dans cette fiche selon le référentiel **v1.1**. La décision retenue est : **[décision]**. Elle repose sur **[éléments précis]**. Les réserves et contrôles restant à effectuer sont **[liste ou mention « aucun dans le périmètre examiné »]**. Cette appréciation porte sur le périmètre et le niveau de lecture indiqués.
