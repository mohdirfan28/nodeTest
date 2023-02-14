const express=require('express');
const app=express();
require('./config');
const Product=require('./product');
app.post("/create",(req,resp)=>{
    resp.send("Done creating");
    console.log("hello world")
    console.log("hello");



})
app.listen(5000);