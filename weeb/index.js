const express=require('express');
const app=express();
const morgan=require('morgan');
morgan('tiny')
app.use(()=>{
    console.log('HEYY!!!')
})
app.get('/',(req,res)=>{
    res.send('HOME PAGE!')
})
app.get('/dogs',(req,res)=>{
    res.send('woof woof!')
})
app.listen(3000,()=>{
    console.log('App is running on localhost:3000')
})