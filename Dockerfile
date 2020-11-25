FROM node:12.18.1

WORKDIR /app

COPY package.json .
COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]