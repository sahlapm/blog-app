

const express = require('express');
var app=new express();
app.use(express.json());
app.use(express.urlencoded({extented:false}));
var morgan = require('morgan')
app.use(morgan('dev'));
const cors=require('cors');
app.use(cors());
const mongoose=require('mongoose');
const blog = require('./routes/blogData');
const login = require('./routes/loginData');
const { LoginModel } = require('./model/login');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://sahla:sahlaAtlas@cluster0.2wlvq8k.mongodb.net/BlogDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/blog',blog);
app.use('/login',login);

//Running server at port 8082
app.listen(8082,()=>
{
    console.log("Server listening to port 8082");
}
)