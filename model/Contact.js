const mongoose = require('mongoose');

const contactSchema =  new mongoose.Schema({
    name:{type:String,required: true},
    email:{ type: String , unique :true , require: true},
    message:{type:String , require: true},
});

module.exports= mongoose.model("Contact",contactSchema);