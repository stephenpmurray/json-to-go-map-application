FROM docker.io/node:22-alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY src src

ENTRYPOINT node src/index.js "$@"
