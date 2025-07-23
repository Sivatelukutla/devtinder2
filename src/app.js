const express = require("express");
const app = express();

// app.use("/",(req,res,next)=>{
//   // res.send("home data1")
//   next()
// },(req,res,next)=>{
//   res.send("home data2")
//   next()
// })

app.use("/", (req,res,next)=>{
  next()
})

app.use("/",(req,res)=>{
  res.send("home data")
})

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
