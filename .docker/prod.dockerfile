FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install && \
    npm install -g @angular/cli

COPY . .

RUN ng build

FROM nginx:1.21.6

COPY --from=builder /app/dist/* /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf
