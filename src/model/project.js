
const mongoose = require("mongoose");
//schema: quy dinh hinh thu data
const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    source: String,
    demo: String,
    image: String,
    techStack: {
      countSuccess: Number,
      detail: [{
        path: String,
        error: String
      }]
    }
  },
  { timestamps: true }
);

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
