FROM node:16.3.0-alpine

RUN apk update && \
    apk add git &&  \
    git clone https://github.com/boysers/angular-intermediate-backend.git app

WORKDIR /app

RUN npm install
