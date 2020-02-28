var bodyParser=require("body-parser")
var  express= require("express");
var  app=express();
const mongoose=require("mongoose");
var port =4050;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json' }));

require('./route')(app);

mongoose.connect("mongodb://localhost:27017/tododatabase", 
                 {useNewUrlParser : true, useUnifiedTopology: true});

let db = mongoose.connection;
db.once("open", function() {
    console.log("Connected to DB");
  });
  
  app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));
  