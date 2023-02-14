const express=require('express');
const EventEmitter = require('events');
const app=express();
const event=new EventEmitter();
event.on('count api', ()=>{
    console.log("event called")
})

app.get('/',(res,resp)=>{
    resp.send('hello world');
    event.emit("count api");
});
app.get('/search',(res,resp)=>{
    resp.send('search api called');
});
app.get('/update',(res,resp)=>{
    resp.send('update api called');
});
app.listen(5000)