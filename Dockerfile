FROM node:18.8.0-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json  .
COPY yarn.lock .

RUN apk add git

COPY . .
RUN yarn install
RUN yarn build


EXPOSE 3000
CMD [ "yarn", "build", "serve" ]