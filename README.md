# Rest API to pubish dev comments

## Introduction
This project is a light comment API based on node, mongodb and JSON Web Token (JWT).
Once it's running, you can create a user and authenticate, then you can manipulate comments.

## Requirements
* Node, NPM & MongoDB, docker compose

## Installation
* Clone this repo: ``` git clone https://github.com/severin-bruhat/bestcodecomment.git ```
* Install the containers: docker-compose up -d --build
* Install dependecies: ``` npm install ```
* Install nodemon: ``` npm install nodemon -g ```

## Testing
The source code includes a Postman collection: bestcodecomment.postman_collection

## Useful commands
docker-compose build
docker-compose up -d --build
docker-compose down