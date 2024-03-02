
const mongoose = require("mongoose");
//schema: quy dinh hinh thu data
const skllSchema = new mongoose.Schema(
  {
    description:String,
    images:[String]
  },
  { timestamps: true }
);

const Skill = mongoose.model("skill", skllSchema);

module.exports = Skill;
