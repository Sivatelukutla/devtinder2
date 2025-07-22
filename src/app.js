const express = require("express");
const app = express();


app.use("/hello", (req,res)=>{
    res.send("hello hello");
})

app.use("/test", (req,res)=>{
    res.send("hello test");
})

app.use("/", (req,res)=>{
    res.send("namaste siva");
})




app.listen(3000, ()=>{
    console.group("server is running")
})