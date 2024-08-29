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
    validate: {
      validator: function(email) {
        return validator.isEmail(email);
        },
        message: "Please enter a valid email",
        }
  },  
  phone:{
    type:String,
    required:true,
    unique:true,
    validate:{
      validator:(phone)=>{
        const phoneValidation=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneValidation.test(phone);  
      },
      message:"Please enter valid phone number"
    }
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
      Validator:(postalCode)=>{
        const postalCodeValidation=/^[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]$/;
        return postalCodeValidation.test(postalCode);
      }
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
  }
});

module.exports = Customers;