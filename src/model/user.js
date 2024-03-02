
const mongoose = require("mongoose");
//schema: quy dinh hinh thu data
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    city: String,
    address:String,
    age:Number,
    image:String
  },
  { timestamps: true }
);

const MyUser = mongoose.model("myUser", userSchema);

module.exports = MyUser;
