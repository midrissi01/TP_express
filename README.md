
Fonctionnalités
                  
Le projet TP Express est une application basée sur Node.js et Express.js qui propose les fonctionnalités suivantes :

Création de serveur web : L'application utilise Express.js pour créer un serveur web permettant de gérer les requêtes HTTP.
Gestion de routes : Express.js est utilisé pour définir des routes qui gèrent les différentes requêtes HTTP et exécutent des actions spécifiques en réponse à ces requêtes.
Gestion de fichiers statiques : Les fichiers statiques, tels que les fichiers JavaScript, sont servis aux clients via Express.js.
Architecture de l'Application

L'architecture de l'application est organisée autour du framework Express.js et se compose généralement des éléments suivants :

app.js : Ce fichier est le point d'entrée de l'application. Il configure Express.js, définit les routes et les middlewares.
Routes : Les routes sont définies dans app.js et dirigent les requêtes HTTP vers les contrôleurs appropriés.
Contrôleurs : Les contrôleurs sont responsables de la logique métier de l'application. Ils sont invoqués par les routes et effectuent les actions nécessaires.
