// This is our entry-point for our application
require('dotenv').config(); // here, we are configure the dotenv for the mongooes DB
// const { config } = require('dotenv');
const express = require('express');
// we need require qurey or library of mongooes
const mongoose = require('mongoose'); 
const myMongoData = process.env.DATABASE_URL;
// console.log(myMongoData);
mongoose.connect(myMongoData);
const myDatabase = mongoose.connection;

//DataBase Function if my database connected it will tells us
myDatabase.on('error', (error) =>
{
    console.log(error);
});
myDatabase.once('connected',() =>
{
    console.log('My DataBase Connected');
});
 // transfer the content of express into a new constant
const app = express();
app.use(express.json());
// To import routes 
const routes = require('./routes/routes');
// app.use takes two things. One is the base endpoint, 
// and the other is the contents of the routes. 
// Now, all our endpoints will start from '/api'.
app.use('/api', routes);
// We are setting the server on Port 3000
app.listen(4000, function() // listen the change of this file on port 3000
{
    console.log('Server Started at ${4000}');
});
