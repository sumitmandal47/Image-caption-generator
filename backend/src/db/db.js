
const mongoose = require("mongoose")


function connectDB() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    console.log("connect DB Successfully");
    
  })
}

module.exports= connectDB