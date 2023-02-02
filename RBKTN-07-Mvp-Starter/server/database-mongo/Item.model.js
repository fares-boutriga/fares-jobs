const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  name:{
    type:String,
    unique: true
  },
  image:String,
  job_title:String,
  contact:{
    phone_number:Number,
    e_mail:String
  },
  description: {
    recrutement_date:Date,
    bank_rib:String,
    branche:String,
    comment:String
  },

});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;