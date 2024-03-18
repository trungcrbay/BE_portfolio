
const mongoose = require("mongoose");
//schema: quy dinh hinh thu data

const clientSchema = new mongoose.Schema(
  {
    username: {
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    
    password: {
        type:String,
        required:true
    }
  },
  { timestamps: true }
);


const Client = mongoose.model("client", clientSchema);

module.exports = Client;
