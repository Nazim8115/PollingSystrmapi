const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// mongoose.connect('mongodb://127.0.0.1:27017/Polling_api');
mongoose.connect("mongodb+srv://nazimnn459:4rp4Epb05ia1Vd7q@cluster0.oahgkhl.mongodb.net/");

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// Code for manually using the mongodb of local system

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;

