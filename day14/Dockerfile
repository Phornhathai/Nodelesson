FROM node:15.14.0-alpine3.13

WORKDIR /app

COPY src .

RUN npm install

EXPOSE 7774

ENTRYPOINT ["node" , "app.js"] 

