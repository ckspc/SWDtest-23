const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


const server = app.listen(port,()=>{
    console.log("asdlkajsdkasmd.as")
})

app.get('/findMinMaxAvg',(req,res)=>{
    res.write("asdasd")
})

module.exports=app;

