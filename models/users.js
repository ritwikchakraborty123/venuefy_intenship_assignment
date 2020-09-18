const mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    contact:String,
    whatsapp:String,
    email:String,
    date:String,
    requirement:String,
    comment:String
});

module.exports=mongoose.model('users',userSchema);