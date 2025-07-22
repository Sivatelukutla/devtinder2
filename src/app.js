const express = require("express");
const app = express();

// dynamic route: matches "/ac" or "/abc"
app.get("/a*c", (req, res) => {
  res.send("sending data");
});

app.get("/ab+c", (req,res)=>{
    res.send("data sending")
})

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
