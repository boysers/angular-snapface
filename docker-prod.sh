#!/etc/bash

docker-compose -f docker-compose.yml -f docker-compose.prod.yml down

docker image prune -f

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
