const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
const port=4001;

//secret key to generate toke to access api
const client_secret="customers-bank-api";

//api to generate token 
app.get("/generate-token",(req,res)=>{
    const token=jwt.sign({client_id:"cust-details"},client_secret,{
        expiresIn:"3h",
});
    res.send({token});//token as result
});

//server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});




