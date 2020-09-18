const express= require ("express");
const app = express();
const mongoose=require("mongoose");
const user=require('./models/users');
const bodyParser=require('body-parser');

var bodyParsermiddleware=bodyParser.urlencoded({extended:false});
app.set('view engine','ejs');
// connect db
mongoose.connect('mongodb+srv://ritwik:*****@cluster0.hvo8b.mongodb.net/database?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("db connected");
})
// end

app.get('/',(req,res)=>{
    res.render('index');

});

app.post('/',bodyParsermiddleware,(req,res)=>{
res.render('index');
console.log(req.body);

const data=new user({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    contact:req.body.contact,
    whatsapp:req.body.whatsapp,
    email:req.body.email,
    date:req.body.date,
    requirement:req.body.requirement,
    comment:req.body.comment
});

data.save().then((result)=>{
console.log('inserted');
});


});
const port=process.env.PORT || 3000;

app.listen(port,()=>console.log("server started.."));
