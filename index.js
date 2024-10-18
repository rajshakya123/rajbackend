require('dotenv').config()
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
res.send('<h1>This is Home Page</h1>')
});
app.listen(process.env.PORT,()=>{
    console.log(`Server run successfuly ${port}`)
})
