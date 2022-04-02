FROM node:16

RUN npm install -g @angular/cli

ADD . /app/
WORKDIR /app
RUN npm install \
  && ng build