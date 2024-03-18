
const mongoose = require("mongoose");
//schema: quy dinh hinh thu data
const noteSchema = new mongoose.Schema(
  {
    title:String,
    content:String,
  },
  { timestamps: true }
);

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
