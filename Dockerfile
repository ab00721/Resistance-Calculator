FROM node:14.21.2 as build

WORKDIR /app

RUN npm install -g http-server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM node:14.21.2-alpine

WORKDIR /app

COPY --from=build /app/dist/cs6261project4 .

RUN npm install http-server

EXPOSE 4200

CMD ["http-server", "-p", "4200"]
