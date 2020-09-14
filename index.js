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
// user.find({},(err,res)=>{
//     if(!err)
//         {
//             res.forEach(element => {
//                 if(element.name!=undefined)
//                 console.log(element.name);
//             });
//         }
// });






const port=process.env.PORT || 3000;

app.listen(port,()=>console.log("server started.."));
































// const express=require('express');
// const app=express();
// const  people=require('./routes/people');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/people',people);

// app.use(express.static('static'));
// app.set('view engine','ejs');


// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/'+'static/sendfile.html');
// });

// app.get('/:id',(req,res)=>{
//     console.log(req.params.id);
    
//      res.render('index', {data : {id : req.params.id , arr: ['a' ,'b' ,' c'] } } );
// });
// app.post('/',(req,res)=>{
// // res.redirect('index/'+req.params.email);

// res.redirect('/'+req.body.email);
// });
// app.listen('3000',()=> console.log('running..'));
