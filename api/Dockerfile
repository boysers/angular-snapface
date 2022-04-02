FROM node:16.14.2-buster

RUN mkdir /src/
WORKDIR /src
RUN apt-get update -yq \
  && apt install git -yq \
  && git clone https://github.com/boysers/angular-intermediate-backend.git app

WORKDIR /src/app

CMD npm install