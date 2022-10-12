FROM node:16.14.2-alpine3.15
RUN apk add --no-cache bash
RUN npm install -g @nestjs/cli
USER node
WORKDIR /home/node/app
