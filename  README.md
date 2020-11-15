Environnement de développement d'installation

Afin de démarrer votre api, la première chose à faire est de configurer un environnement de développement node.

Les outils suivants sont nécessaires pour configurer un environnement de développement node:

Node JS
Node.js est un moteur d'exécution JavaScript basé sur le moteur JavaScript V8 de chrome. Il est recommandé de télécharger et d'installer la version stable de Node JS depuis son site officiel https://nodejs.org/

Préparation
Vous devrez installer Node.js> = v10 + (version recommandée) (NPM l'accompagne) et servir (un package NPM)


Regardons comment la configuration:
Utilisez le terminal et accédez à la racine du projet.

Puis exécutez: npm install

Puis exécutez: npm run dev:start ou npm start

Cela renverra quelque chose comme ça dans la console:

demon] 1.19.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `babel-node server.js`
listening on port: 8080
Connexion reussie!

Pour recuperer les données depuis un api externe, il faut exécuter la commande  node src/com_api_externe/BusinessUnit.js  depuis la racine du projet
