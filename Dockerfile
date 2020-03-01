FROM node:13

WORKDIR /app

COPY src .
COPY src .
COPY src .

RUN npm init -y

#npm install --save sequelize sequelize-cli pg pg-hstore

RUN npm install

COPY . .

EXPOSE 3001

CMD npm run serve