//import express from 'express'; 
const express = require("express");
//import cors from 'cors';
//import { connect } from 'mongoose';



//connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});

const app = express();

app.use(express.json());

//app.use(cors());


const sequelize1 = require('sequelize');

//const sequelize = new sequelize("teste_node", "postgres", "postgres", {});
//const Project = sequelize.import(_customer2.default);

var sequelize = new sequelize1('postgres://postgres:postgres_container:5432/teste_node');

sequelize.authenticate()
  .then(() => {
    console.log('connected to DB');
  });

const { User } = require('./models/user');

const routes = express.Router();

routes.get("/", (req,res)=>{
	return res.send("Chegou aki fsfsdfsdfds");
});

routes.get("/teste", async (req,res) => {


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
	return res.send("alterei" + error);
}




	//User.create({ name: 'vagner', email: 'vanger@doutbox.com.br', password: '123456' });

    //return res.send("alterei" + process.version);

		


});
//app.use('/api', require('./src/routes'));

app.use(routes);

app.listen(3001);
