FROM node:18.8.0-alpine AS builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json  .
COPY yarn.lock .

RUN apk add git

COPY . .
RUN yarn install
RUN yarn build

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
ENV PAYLOAD_SECRET=ULAFM2FEu9XpaCHwXQ8xt79GzvI0Rt3zjniwI

EXPOSE 3000
CMD [ "yarn", "run", "serve" ]