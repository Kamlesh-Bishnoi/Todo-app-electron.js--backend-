var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var newSchema= new Schema({
    title:{type:String},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
});
module.exports=mongoose.model("todo",newSchema)

