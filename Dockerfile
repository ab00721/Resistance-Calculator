FROM node:14.21.2

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g http-server
RUN ng build

CMD ["http-server", "-p", "4200"]
