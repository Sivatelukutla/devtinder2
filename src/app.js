const express = require("express");
const app = express();

app.use("/test", (req,res)=>{
    res.send("hello test")
})

app.use("/hello", (req,res)=>{
    res.send("hello hello")
})

app.listen(3000, ()=>{
    console.group("server is running")
})