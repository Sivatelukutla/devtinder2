const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://sivaprasadtelukutla:siva1358@namastenode4.wh0gzdo.mongodb.net/devTinder")
}

module.exports = connectDB
