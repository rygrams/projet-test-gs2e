# Pré requis
- Node
- MongoDB
- Vue CLI
- Postman pour tester les APIs

## Installation Backend

- MongoDB (base de données)
- Express (API REST)
- Jwt (authentification)
- Passport (authentification, protection des routes)
- Multer (stockage des fichiers)
- Mongoose (NodeJS, interactions avec la base de donnés)

Accéder fichier .env pour configurer l'accès a la base de données MongoDB

```
cd backend
npm install
node server.js // URL : localhost:3000/
```
Pour créer un Super Admin visité docs/api_doc.pdf
Vous trouverez la documentation de l'API dans le dossier docs à la racine du projet


## Installation FrontEnd

- Axios pour les appels API
- Vuex gestion des états
- TailwindCSS pour le style
- Vue Router pour le routing
- Vue Formulate pour les formulaires

```
cd frontend
npm install
npm run serve
```

Vous trouverez la présentation du site dans le dossier docs à la racine du projet


## Lancer via docker

docker-compose build
docker-compose up