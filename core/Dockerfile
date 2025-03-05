FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN corepack enable && corepack prepare yarn@4.7.0 --activate

RUN yarn install

COPY . .

CMD ["yarn", "dev:docker"]