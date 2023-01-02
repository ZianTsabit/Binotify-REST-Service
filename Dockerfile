FROM node:16-alpine

EXPOSE 3001

WORKDIR /src

RUN npm install i npm@latest -g 

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "devBinotify"]