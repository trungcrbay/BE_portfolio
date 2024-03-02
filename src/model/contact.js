

const mongoose = require("mongoose");
//schema: quy dinh hinh thu data
const contactSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    content:String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
