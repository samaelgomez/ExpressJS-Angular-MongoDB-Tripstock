#!/bin/bash

docker network create app-network

docker build -t frontend-image ./frontend
docker build -t backend-image ./backend

docker run --name mongo-container --network app-network -d -p 27017:27017 mongo
docker cp ./backend/tripstockproducts mongo-container:/dump
docker exec -it mongo-container mongorestore --db=tripstockproducts

docker run --name backend-container --network app-network -d -p 3000:3000 backend-image
docker run --name frontend-container --network app-network -d -p 80:80 frontend-image

# Si utilitzem Docker Hub no farà falta fer el build i les dos últimes línies es reemplaçarien per aquestes dos.
# docker run --name backend-container --network app-network -d -p 3000:3000 samaelgh/backend-image
# docker run --name frontend-container --network app-network -d -p 80:80 samaelgh/frontend-image