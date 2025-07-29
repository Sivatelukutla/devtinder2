const express = require("express");
const connectDB = require("./config/database");
const user = require("./models/user.js")
const app = express();

app.use(express.json())

app.get("/get", async(req,res)=>{
  let data = req.body.email
  try{
    let result = await user.find({
    email : data
  })
  if(!data){
    res.status(400).send("user is not found")
  }
  else{
    res.send(result)
  }
  }
  catch(err){
    res.status(400).send("user is not their")
  }
})

app.post("/user", async (req, res) => {
  try {
    let result = new user(req.body)
    await result.save()
    res.send(result);

  }
  catch (err) {
    res.status(400).send("error in this code")
  }
})

app.delete("/delete", async (req, res) => {
  try {
    let email = req.body.email
    await user.findOneAndDelete({
      email: email
    })
    res.send("user is deleted")
  }
  catch(err){
    res.status(401).send(err)
  }
})

// app.patch("/update", async (req, res) => {
//   const { id, email } = req.body; // Get both `id` and `email` from the request body

//   try {
//     if (!id || !email) {
//       return res.status(400).send("ID and email are required");
//     }

//     const result = await user.findByIdAndUpdate(
//       id,
//       { $set: { email } },
//       { new: true }
//     );

//     if (!result) {
//       return res.status(404).send("User not found");
//     }

//     res.send(result);
//   } catch (err) {
//     res.status(500).send("An error occurred while updating the user");
//   }
// });




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
