var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var newSchema= new Schema({
    fullName:{type:String},
    email:{type:String, unique:true},
    password:{type:String},
    mobileNo:{type:Number},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
});
module.exports=mongoose.model("user",newSchema) 
