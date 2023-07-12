FROM node:14.21.2

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN npm install -g http-server
RUN node_modules/.bin/ng build

CMD ["http-server", "dist/cs6261project4", "-p", "4200"]
