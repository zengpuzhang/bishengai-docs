FROM node:12

RUN mkdir /local
RUN npm install -g @vue/cli

WORKDIR /local
EXPOSE 8080

CMD ["/bin/bash", "-c", "npm install && npm run docs:dev --host 0.0.0.0"]