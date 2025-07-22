const express = require("express");
const app = express();


app.get("/home/:userId", (req,res)=>{
    console.log(req.params);
    res.send("home data")
})

app.get("/data", (req,res)=>{
    console.log(req.query)
    res.send("data data data")
})
app.listen(3000, ()=>{
    console.group("server is running")
})