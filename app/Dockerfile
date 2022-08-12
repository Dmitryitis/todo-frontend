FROM node:16-alpine

WORKDIR /src/app

RUN apk add --no-cache git

COPY app/package.json package.json
COPY app/package-lock.json package-lock.json

RUN npm ci -q
RUN npm i -g serve

WORKDIR /src

COPY app app

WORKDIR /src/app
ENV NODE_ENV production
RUN npm run build

ENV HOST 0.0.0.0

CMD serve -s build