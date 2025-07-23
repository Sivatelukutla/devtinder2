const express = require("express");
const app = express();
const {auth, user} = require("./middleware/auth")

app.use("/admin", auth, (req,res)=>{
  res.send("admin is login successfully")
})

app.use("/user", user, (req,res)=>{
  res.send("user is successfully login")
})



// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
