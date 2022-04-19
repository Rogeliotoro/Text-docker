FROM node:15.14.0-alpine3.10

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g nodemon

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
