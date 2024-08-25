//schema set up
const mongoose = require("mongoose");
const validator = require("validator");

const Customers = mongoose.model("Customers", {
  customerId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },  
  phone:{
    type:String,
    required:true,
    unique:true,
  },
  address:{
    street:{
      type:String,
      required:true, 
    },
    city:{
      type:String,
      required:true,
    },
    province:{
      type:String,
      required:true,
    },
    postalCode:{
      type:String,
      required:true,
    },
  }, 
  accountType: { 
    type: String,
    enum: ['Checking', 'Savings', 'Credit'], 
    required: true 
  },
  accountBalance: { 
    type: Number, 
    default: 0.0 
  },
});

module.exports = Customers;