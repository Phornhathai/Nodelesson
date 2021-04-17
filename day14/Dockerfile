FROM node:15.14.0-alpine3.13

WORKDIR /app

COPY src .

RUN npm install

ENTRYPOINT ["node" , "app.js"]