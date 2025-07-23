const express = require("express");
const connectDB = require("./config/database");
const user = require("./models/user.js")
const app = express();



app.post("/user", async(req,res)=>{
  let userObj = {
    firstName : "siva",
    lastName : "telukutla",
    email : "sivaprasadtelukutla@gmail.com",
    password : "1358",
    age : 1358,
    gender : "male"
  }
  try{
    let result = new user(userObj)
    await result.save()
    res.send("user is successfully")
  }
  catch(err){
    res.send(err)
  }


})


connectDB()
  .then(() => {
    console.log("Database is successfully connected");

    // Start server
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Database is not connected:", err.message);
  });
