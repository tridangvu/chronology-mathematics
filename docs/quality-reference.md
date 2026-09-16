> **Statut dans le dépôt.** Document autoritatif de qualité des articles (v1.0).
> English project docs point here; the French text is the source of truth.
> Validation sheet template: [`quality-validation-sheet.md`](./quality-validation-sheet.md).
> Completed reviews: [`../reviews/`](../reviews/).

# Référentiel de qualité des articles — Chronologie mathématique

Version 1.0 — 16 septembre 2026.

Ce document sert à concevoir, rédiger et relire les articles du projet, puis à consigner une appréciation justifiée de leur qualité. Il s’applique aux articles consacrés à un résultat, une définition, une méthode, une construction ou un contre-exemple.

## Principe directeur

**Un article est réussi lorsque le lecteur visé comprend un problème, acquiert une idée mathématique nouvelle, comprend pourquoi elle fonctionne et sait reconnaître ce qu’elle permet de faire.**

La priorité du projet est l’apprentissage des mathématiques. La chronologie organise leur apparition et leurs relations ; le contexte historique éclaire leur raison d’être. L’exhaustivité historique n’est pas exigée. En revanche, les faits historiques effectivement avancés doivent être exacts, sourcés et distingués des reconstructions pédagogiques.

La qualité se mesure au contenu effectivement transmis. La longueur de l’article, le nombre de références et la présence de toutes les rubriques ne constituent pas, à eux seuls, des preuves de qualité.

## Mode d’emploi

Avant la rédaction, définir le lecteur visé, le problème central et l’acquis attendu. Pendant la rédaction, utiliser les critères C0 à C7. Après rédaction, remplir la fiche de validation figurant à la fin du document.

Les rubriques peuvent être regroupées lorsque cela améliore l’exposition. Leurs fonctions doivent alors rester identifiables. Une rubrique sans apport propre peut être omise avec justification ; l’omission ne dispense pas de satisfaire l’objectif correspondant ailleurs lorsque celui-ci est nécessaire.

L’évaluation porte sur une version précise de l’article. Pour chaque critère, le relecteur indique un état et une justification localisée :

| État | Signification |
| --- | --- |
| Satisfait | L’exigence est remplie et le contrôle effectué est explicité. |
| Partiel | Une partie de l’exigence est remplie ; ce qui manque est identifié. |
| Non satisfait | Un défaut précis empêche de remplir l’exigence. |
| Non vérifié | Le contrôle n’a pas été effectué ou les éléments disponibles ne permettent pas de conclure. |
| Non applicable | L’exigence n’a pas de fonction pour cet article ; la raison est donnée. |

« Satisfait » doit renvoyer à un passage, un calcul, une référence ou une vérification concrète. Une simple déclaration de l’auteur ne suffit pas à attester la qualité.

## C0 — Repères, public et périmètre

**Objectif : le lecteur sait ce qu’il va apprendre et de quelles connaissances il a besoin.**

Critères :

- Le titre désigne un apport mathématique suffisamment précis.
- Le résumé annonce le problème et le gain attendu.
- Les prérequis correspondent aux outils réellement employés. Les prérequis supplémentaires de la relecture moderne sont distingués de ceux du corps principal.
- Les dates et attributions ont une signification explicite : formulation, publication, démonstration, généralisation, etc. Une incertitude est conservée comme telle.
- Le périmètre est maîtrisé : l’article possède une idée centrale identifiable. Les résultats secondaires servent cette idée.

**Vérification :** compléter ces cinq phrases sans employer de formulations vagues telles que « mieux comprendre le sujet » :

1. Le lecteur sait déjà…
2. Il cherche à comprendre ou à faire…
3. La difficulté est…
4. L’idée nouvelle consiste à…
5. Après lecture, il saura…

Les informations de cadrage ne doivent pas révéler d’écart majeur entre les connaissances annoncées et celles effectivement requises.

## C1 — Problème et contexte historique

**Objectif : le lecteur comprend clairement la raison d’être de l’article avant de connaître la solution.**

Critères :

- Le problème est formulé assez précisément pour qu’on reconnaisse ce qui constituerait une réponse.
- Son intérêt est accessible avec les prérequis annoncés : calcul à effectuer, construction à réaliser, phénomène à expliquer, classification à établir, difficulté logique à résoudre, etc.
- L’obstacle est expliqué. Il peut s’agir d’une impossibilité, d’une méthode trop lourde, d’un manque d’unification ou d’une compréhension insuffisante.
- Un exemple ou une situation explicite rend l’objectif concret lorsque l’énoncé général ne suffit pas.
- Le contexte historique contribue à comprendre le problème et les outils disponibles. Les affirmations sur les motivations effectives d’un auteur sont documentées.
- Une motivation reconstruite pour le lecteur est présentée comme telle, sans être attribuée indûment aux acteurs historiques.

**Vérification :** après avoir lu uniquement cette partie, peut-on reformuler le problème, reconnaître la difficulté et expliquer pourquoi une nouvelle idée serait utile ?

**Insuffisance typique :** annoncer qu’une notion est « fondamentale » ou « très utilisée aujourd’hui » sans rendre intelligible la question à laquelle elle répond.

## C2 — Résultat ou notion nouvelle

**Objectif : le lecteur sait exactement quel apport mathématique est présenté.**

Critères :

- L’énoncé ou la définition est formulé en langage moderne, avec les objets, domaines, hypothèses et quantificateurs nécessaires.
- La portée de l’apport est claire : existence, unicité, classification, procédure de calcul, critère, nouvelle notion, impossibilité, etc.
- Les notations sont définies avant leur utilisation et restent cohérentes.
- Un exemple permet de lire l’énoncé ou de reconnaître les objets définis. Un cas limite ou un contre-exemple est ajouté lorsqu’il éclaire une hypothèse.
- L’article distingue la contribution historique de la version exposée : changement de notation, reformulation équivalente, restriction pédagogique, extension de généralité ou correction ultérieure.
- La description de ce qui a été accompli n’attribue pas rétrospectivement aux auteurs les concepts introduits seulement dans la relecture moderne.

Pour une définition, expliquer ce qu’elle rassemble ou distingue et pourquoi ses conditions sont utiles. Pour un algorithme, préciser ses entrées, ses sorties et les conditions de validité ou de terminaison pertinentes.

**Vérification :** le lecteur peut-il reformuler l’apport sans ambiguïté et décider s’il s’applique à un exemple proposé ?

**Insuffisance typique :** présenter une formule correcte sans préciser à quels objets elle s’applique ou ce qu’elle affirme.

## C3 — Raisonnement en langage moderne

**Objectif : le lecteur acquiert le mécanisme d’une idée et une manière de raisonner. Cette partie constitue le cœur pédagogique de l’article.**

Critères :

- L’idée directrice est identifiable et articulée au problème initial.
- La preuve possède une progression compréhensible : les objectifs intermédiaires et leur contribution au résultat sont expliqués.
- Les constructions décisives sont motivées. Le lecteur comprend ce qu’un objet auxiliaire permet de conserver, comparer, transformer, éliminer ou mesurer.
- Les notations sont allégées lorsque cela facilite la lecture, sans supprimer une distinction mathématiquement nécessaire.
- Les étapes qui concentrent la difficulté sont développées. Les détails routiniers peuvent être abrégés si le lecteur visé dispose des moyens de les reconstituer.
- Les exemples illustrent les étapes abstraites utiles ; ils ne tiennent pas lieu de démonstration d’un énoncé général.
- Les dépendances sont explicites : ce qui est démontré, ce qui est déjà connu et ce qui est admis sont reconnaissables.
- Le statut de l’exposition est annoncé : preuve historique réécrite, raisonnement de découverte documenté ou reconstruction pédagogique.

Une reconstruction peut rendre une construction intelligible sans prétendre qu’elle était inévitable. L’article peut reconnaître une idée ingénieuse et expliquer sa fonction, sans inventer des essais ou intentions de l’auteur.

**Vérification :** le lecteur devrait pouvoir répondre à ces questions :

- Quelle est l’idée décisive ?
- Pourquoi introduit-on les principaux objets auxiliaires ?
- Où intervient l’hypothèse importante ?
- Comment refaire le raisonnement dans un cas simple ?
- Dans quel problème voisin pourrait-on essayer la même idée ?

Ces questions guident la relecture ; elles n’imposent pas une série d’exercices dans chaque article.

**Insuffisance typique :** une suite de calculs valides dont on ne comprend ni le choix ni le but, ou une explication intuitive qui masque le passage décisif.

## C4 — Ce que l’apport permet immédiatement

**Objectif : le lecteur constate le gain mathématique obtenu.**

Critères :

- Un exemple, une application ou une illustration met effectivement en jeu l’idée centrale.
- Le cas traité est assez simple pour être suivi avec les outils de l’article.
- Le gain est explicite : calcul simplifié, existence établie, ambiguïté levée, obstruction reconnue, phénomène expliqué ou problèmes auparavant séparés réunis.
- L’application est menée jusqu’à une conclusion interprétée.
- Lorsque cela convient, le problème posé en introduction est repris et résolu.
- Les limites de l’outil sont indiquées lorsqu’elles sont nécessaires pour éviter une extrapolation abusive.

Distinguer une illustration de l’énoncé et une application du résultat. La première aide à comprendre ce qu’il dit ; la seconde montre ce qu’il permet d’obtenir. Pour une définition, le gain peut être une nouvelle distinction ou l’énoncé d’une propriété jusque-là difficile à formuler. Une illustration suffit si elle rend ce gain conceptuel manifeste.

**Vérification :** peut-on compléter précisément « Grâce à cet apport, nous pouvons maintenant… » et montrer où l’article le fait ?

**Insuffisance typique :** annoncer une liste d’applications sans en expliquer aucune.

## C5 — Point de vue moderne et justification complète

**Objectif : le lecteur disposant des prérequis supplémentaires trouve une reconstitution mathématique satisfaisante et rigoureuse du contenu précédent.**

Critères :

- Les prérequis supplémentaires sont indiqués.
- Les objets et arguments antérieurs sont reliés précisément au formalisme moderne utilisé.
- Les hypothèses nécessaires à la formulation et à la preuve sont toutes explicites.
- Les affirmations laissées en suspens dans le corps principal sont justifiées ou ramenées à des résultats identifiés, dont l’applicabilité est vérifiée.
- Les images intuitives et arguments heuristiques sont reliés à des énoncés exacts ; leur portée et leurs limites sont précisées.
- Toute nouvelle abstraction apporte un éclairage identifiable : explication d’une hypothèse, unification, simplification, généralisation ou compréhension structurelle.
- Une preuve moderne différente est distinguée de la preuve exposée précédemment ; les changements de stratégie ou d’outils sont expliqués.

La rigueur vaut dans tout l’article. Une affirmation provisoirement admise ou une heuristique doit être signalée dès sa première apparition. Cette partie peut compléter une justification ; elle ne doit pas corriger silencieusement un énoncé faux ou une hypothèse omise dans le corps principal.

« Justification complète » signifie **complète relativement aux prérequis déclarés**. Il n’est pas demandé de redémontrer leurs fondements. Il faut néanmoins vérifier que les résultats invoqués suffisent réellement et qu’aucun argument ne dépend circulairement de la conclusion.

Si le corps principal remplit déjà cette fonction, cette rubrique peut être courte ou intégrée à celui-ci. L’évaluation cite alors les passages correspondants. L’absence de rubrique séparée ne dispense pas du contrôle de rigueur.

**Vérification :** un lecteur qualifié peut-il retracer toutes les dépendances substantielles et vérifier chaque passage décisif sans devoir deviner un argument manquant ?

**Insuffisance typique :** ajouter des termes abstraits sans établir leur correspondance avec les constructions précédentes, ou invoquer un théorème dont les hypothèses ne sont pas vérifiées.

## C6 — Développements ultérieurs et liens

**Objectif : le lecteur comprend quelles questions viennent naturellement ensuite.**

Critères :

- Les prolongements partent d’une limite, d’un cas non traité, d’une question nouvelle ou d’une idée réutilisable de l’article.
- Les liens précisent leur nature : généralisation, autre preuve, application, obstacle résolu, conjecture ou prérequis complémentaire.
- Chaque lien significatif explique en une phrase pourquoi il mérite d’être suivi.
- Les conjectures et questions ouvertes distinguent le statut à l’époque considérée et le statut contemporain lorsqu’il est mentionné. Ce dernier est vérifié et daté.
- Les développements postérieurs à la période principale du site sont signalés comme tels.
- Un article encore à rédiger est présenté comme une piste future ; il n’est pas affiché comme un lien fonctionnel vers une ressource existante.

**Vérification :** le lecteur peut-il expliquer pourquoi l’un des articles proposés constitue une suite naturelle ?

**Insuffisance typique :** une liste de sujets du même domaine sans relation mathématique explicitée.

## C7 — Sources et traçabilité

**Objectif : les faits avancés et les références utilisées peuvent être contrôlés.**

Critères :

- Chaque affirmation historique substantielle — date, attribution, priorité, influence, motivation, contenu d’un texte — renvoie à une source qui la soutient effectivement.
- Une priorité telle que « première preuve » est justifiée ; à défaut, l’attribution est formulée plus prudemment.
- Les références comportent les informations permettant de les identifier, avec une page, un paragraphe, un numéro d’énoncé ou une autre localisation précise lorsque nécessaire.
- Les rôles des sources sont distingués : texte original, traduction, étude historique, exposition mathématique moderne.
- La référence exacte de la version ou de la preuve reprise est indiquée. Les calculs autonomes de l’article n’exigent pas chacun une référence extérieure.
- Les écarts entre les sources, les attributions discutées et les incertitudes pertinentes sont mentionnés.
- La bibliographie correspond à des sources réellement utilisées. Une référence repérée mais non consultée est indiquée comme telle ; elle ne valide pas une affirmation.
- Les citations littérales sont identifiées et les adaptations sont signalées.

Il n’est pas exigé de consulter systématiquement tous les textes originaux. Une source historique spécialisée peut suffire si elle soutient précisément l’affirmation retenue. Le niveau de détail du contrôle doit permettre de justifier ce que l’article affirme.

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
- Le rendu réel est contrôlé : formules, liens, ancres, tableaux et lecture sur écran étroit. Une validation du fichier source seule ne suffit pas à attester le rendu sur le site.

Une prose élégante ne compense pas un défaut mathématique ; une preuve exacte doit aussi être lisible par le public annoncé.

## Procédure de relecture

1. **Fixer le périmètre.** Identifier la version examinée, le niveau visé, le résultat central et les sources accessibles.
2. **Examiner la progression pédagogique.** Reconstituer le problème, l’obstacle, l’idée et le gain sans recopier le résumé de l’auteur.
3. **Contrôler les mathématiques.** Vérifier les hypothèses et chaque passage décisif ; refaire les calculs centraux et l’application ; rechercher les dépendances circulaires.
4. **Contrôler les faits historiques.** Comparer les affirmations substantielles aux passages sources. Consigner séparément les éléments non vérifiés.
5. **Examiner les prolongements et le rendu.** Vérifier le sens des liens proposés et la présentation effectivement affichée.
6. **Consigner une décision.** Justifier les états attribués et distinguer corrections indispensables et améliorations facultatives.

Une relecture assistée par une IA doit être identifiée comme telle. Elle ne doit pas être présentée comme une relecture humaine indépendante. De même, une estimation de l’intelligibilité ne constitue pas un essai auprès de lecteurs : si un tel essai a eu lieu, indiquer le profil du lecteur, la tâche proposée et le résultat observé.

## Décision éditoriale

**Prêt à publier** : les exigences essentielles applicables sont satisfaites, les passages décisifs et faits historiques substantiels ont été vérifiés, et aucun défaut bloquant n’est ouvert.

**À réviser** : un défaut identifié compromet l’objectif pédagogique, la validité mathématique, la fidélité historique ou l’accès au contenu.

**Évaluation incomplète** : les éléments ou contrôles disponibles ne permettent pas encore de conclure. Préciser ce qui reste à vérifier.

Sont notamment bloquants :

- Un problème ou un apport central impossible à identifier.
- Un énoncé faux, ambigu de manière substantielle ou privé d’une hypothèse nécessaire.
- Une lacune dans le passage décisif, sans résultat admis explicitement identifié pour la combler.
- Une dépendance circulaire.
- Une reconstruction pédagogique présentée comme un fait historique.
- Une attribution, une citation ou une date importante non étayée.
- Une application centrale incorrecte.
- Une présentation qui rend une partie essentielle illisible.

Les imperfections mineures de style peuvent être consignées sans bloquer la publication. Une note globale ou une moyenne ne peut pas compenser un défaut bloquant.

L’attestation décrit les contrôles accomplis sur une version précise. Après une modification substantielle d’un énoncé, d’une preuve, d’une attribution ou d’une application, les contrôles correspondants doivent être renouvelés.

## Fiche de validation à compléter

Copier cette fiche pour chaque relecture. Conserver les justifications et la décision avec l’identifiant de version de l’article.

### Identification

- **Article / identifiant :**
- **Version examinée :** commit Git, version du fichier ou autre repère non ambigu.
- **Date de relecture :**
- **Relecteur :**
- **Nature de la relecture :** humaine, assistée par IA ou entièrement automatisée.
- **Public et prérequis principaux :**
- **Prérequis de la relecture moderne :**
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
| C1 — Problème et contexte | À compléter | | |
| C2 — Résultat ou notion | À compléter | | |
| C3 — Raisonnement et idée acquise | À compléter | | |
| C4 — Gain immédiat | À compléter | | |
| C5 — Justification moderne complète | À compléter | | |
| C6 — Prolongements | À compléter | | |
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

> Pour la version identifiée ci-dessus, j’ai effectué les contrôles décrits dans cette fiche. La décision retenue est : **[décision]**. Elle repose sur **[éléments précis]**. Les réserves et contrôles restant à effectuer sont **[liste ou mention « aucun dans le périmètre examiné »]**. Cette appréciation porte sur le périmètre et le niveau de lecture indiqués.

