FROM node:13

WORKDIR /app

COPY ./app/package.json .
COPY ./app/package-lock.json .

RUN npm init -y

npm install --save sequelize sequelize-cli pg pg-hstore

RUN npm install

COPY . .

EXPOSE 3001

CMD npm run dev