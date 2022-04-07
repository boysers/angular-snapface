FROM nginx:1.21.6

COPY ./reverse_proxy/nginx.conf /etc/nginx/conf.d/default.conf