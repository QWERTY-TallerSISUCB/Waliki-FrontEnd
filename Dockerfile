### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
ENV SERVER_PORT 4200
RUN npm install
COPY . .
RUN npm run build
