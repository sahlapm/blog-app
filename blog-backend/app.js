// Task1: initiate app and run server at 3000
// app.js

const express = require('express');
const bodyparser=require('body-parser');
var app=new express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extented:false}));
const cors=require('cors');
app.use(cors());
const mongoose=require('mongoose');
const { BlogModel } = require('./model/blog');
const { LoginModel } = require('./model/login');
mongoose.connect('mongodb+srv://sahla:sahlaAtlas@cluster0.2wlvq8k.mongodb.net/BlogDB?retryWrites=true&w=majority',
{
    useNewUrlParser:true
});

app.post('/login',async(req,res)=>{
    const data= await LoginModel.create(req.body)
    .then(()=>res.json({message:"Login created successfully"}))
    .catch(err=>{res.status(400).json({error:"Login creation failed"})})
   
})
app.post('/create',async(req,res)=>{
    const data= await BlogModel.create(req.body)
    .then(()=>res.json({message:"Blog created successfully"}))
    .catch(err=>{res.status(400).json({error:"Blog creation failed"})})
   
})

app.get('/',async(req,res)=>{
    const data=await BlogModel.find()
    .then((data)=>res.json(data))
    .catch(err=>{res.status(400).json({error:"No blog find"})})
})
app.put('/update/:id',async(req,res)=>{
    
    let id=req.params.id;
    const data= await BlogModel.findOneAndUpdate({"_id":id},req.body)
   .then(()=>res.json({message:"Blog updated successfully"}))
   .catch(err=>{res.status(400).json({error:"Blog updated failed"})})
   

})
app.get('/:id',async(req,res)=>{
    
    let id=req.params.id;
    const data= await BlogModel.findById({"_id":id})
    .then((data)=>res.json(data))
    .catch(err=>{res.status(400).json({error:"No blog find"})})  

})
app.delete('/delete/:id',async(req,res)=>{
    
        let id=req.params.id;
        
       const data= await BlogModel.findOneAndDelete({"_id":id},req.body)
       .then(()=>res.json({message:"Blog deleted successfully"}))
    .catch(err=>{res.status(400).json({error:"Blog creation failed"})})
       
   
})

//Running server at port 8082
app.listen(8082,()=>
{
    console.log("Server listening to port 8082");
}
)