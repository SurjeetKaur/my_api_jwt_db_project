const express = require("express");
require("./db/mongoose");
const Customers = require("./models/customers");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid'); //unique id creation

const router = express.Router(); 

const client_secret="customers-bank-api"; //secret key from token team

//verify method to access api with token
const authenticateToken = (req,res,next) => {
    const tokenHeader = req.headers.authorization;
  
    if (!tokenHeader) {
      return res.status(401).send("token required to access api");
    }
    const token = tokenHeader.split(" ")[1];
  
    jwt.verify(token, client_secret, async (err, decoded) => {
      if (err) {
        return res.status(401).send("Invalid token");
      }
      req.customers = decoded;
      next();
    });
}
  
//post method to save customers data in database one data at once
/*router.post("/customers",authenticateToken, async (req, res) => {
    let {customerId}=req.body;
    //let customerId=req.body.customerId;
    //console.log(customerId);

    if (!customerId){
      customerId = uuidv4();// generate a new customerId if it's not provided
      req.body.customerId=customerId;// update req.body with the new customerId
    }
    try {
      const existingCustomer = await Customers.findOne({customerId})
      if(existingCustomer){
        return res.status(400).send({error: "customer already exists"});
      }
      const customers = new Customers.(req.body);
      await customers.save();
      res.status(201).send(customers);
      console.log("data saved successfully");
    } catch (e) {
      res.status(400).send(e);
    }
  });*/

  //post method to save customers data in database multiple data at once

  router.post("/customers",authenticateToken, async (req, res) => {
    let customers=req.body;

    customers.forEach((customer) => {
      if (!customer.customerId){
      customer.customerId = uuidv4();// generate a new customerId if it's not provided
      console.log("customerId:",customer.customerId);
      }
    });

    try {
      //check for existing customers
      const existingCustomers = await Customers.findOne({customerId:req.body[0].customerId})
      if(existingCustomers){
        return res.status(400).send({error: "customer already exists"});
      }
      //insert multiple customers
      const customersResult = await Customers.insertMany(customers);
      //await customers.save();
      res.status(201).send(customersResult);
      console.log(customersResult);
      console.log("data saved successfully");

    } catch (e) {
      res.status(400).send(e);
    }
  });
    
  //exporting router to use in another files
  module.exports=router;