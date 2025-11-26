## Séquence 2 – Mise en place de la réactivité avec RxJS

### 1. Concepts clés implémentés
Dans cette séquence, nous avons transformé l'application statique en une application **réactive**.
- **Programmation Réactive** : L'application réagit aux changements de données au lieu de les demander manuellement.
- **RxJS (Reactive Extensions for JavaScript)** : La bibliothèque utilisée par Angular pour gérer ces flux de données asynchrones.

### 2. Architecture du flux de données (Data Flow)
L'architecture mise en place respecte le principe de séparation des responsabilités :

1.  **Le Producteur (`TaskService`)** :
    - Utilise un **`BehaviorSubject`** pour stocker la liste des tâches (l'état).
    - L'avantage du `BehaviorSubject` est qu'il garde en mémoire la dernière valeur émise et la diffuse immédiatement aux nouveaux abonnés.
    - La méthode `addTask()` ajoute une donnée et appelle `.next()` pour notifier tout le système.

2.  **Le Consommateur (`HomeComponent`)** :
    - Ne stocke pas les données lui-même.
    - Il récupère un **Observable** (`tasks$`) fourni par le service.

3.  **L'Affichage (`Template HTML`)** :
    - Utilise le **pipe `| async`**. C'est lui qui s'abonne (`subscribe`) automatiquement au flux et se désabonne quand le composant est détruit (évite les fuites de mémoire).

### 3. Résultat
L'interface se met à jour **instantanément** et automatiquement dès qu'une tâche est ajoutée via le service, sans avoir besoin de recharger la page ou de relancer une fonction d'affichage.