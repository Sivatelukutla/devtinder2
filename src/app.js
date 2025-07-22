const express = require("express");
const app = express();


app.get("/home", (req,res)=>{
    res.send("home data")
})

app.post("/test", async(req,res)=>{
    res.send("test data")
})

app.put("/put", (req,res)=>{
    res.send("put data")
})

app.delete("/delete", (req,res)=>{
    res.send("delete data")
})
app.listen(3000, ()=>{
    console.group("server is running")
})