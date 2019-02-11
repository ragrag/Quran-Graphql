const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Allowing CORS cross origin requests
app.use(cors());

const dbName = 'quran';
//Mongoose connection
mongoose.connect(`mongodb://localhost:27017/${dbName}`,{useNewUrlParser:true});
//Connection success message
mongoose.connection.once('open',()=>{
    console.log(`Connected to database ${dbName}`);
});




//Graphql endpoint with graphqlHTTP middleware
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.get('*',(req,res)=>{
    res.send(404);
});

//express server listen 
app.listen(4000,()=>console.log("Server started"));
