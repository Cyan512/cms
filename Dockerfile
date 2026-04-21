FROM node:20-alpine

WORKDIR /srv/app

RUN apk add --no-cache python3 make g++

COPY ./app/package*.json ./

RUN npm install

COPY ./app ./

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]