FROM node:16 as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

RUN npm install rimraf

COPY . .

RUN npm run build
