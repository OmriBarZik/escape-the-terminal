FROM node:18.12.1-alpine3.16

ADD . /ee5a3b9084684e8a35db704c1eccf5470d9f97b6

WORKDIR /ee5a3b9084684e8a35db704c1eccf5470d9f97b6

RUN npm ci --omit dev

