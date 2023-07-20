// const Port=3000;
const port = process.env.Port|| 3000;
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
const db=require('./config/mongoose');

// Routes
app.use('/',require('./routes/index'));
   
app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",port);
})