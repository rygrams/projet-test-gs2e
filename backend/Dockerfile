FROM node:latest

WORKDIR /usr/src/app

# Installation des dépendances
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000:3000
CMD [ "node", "server.js" ]