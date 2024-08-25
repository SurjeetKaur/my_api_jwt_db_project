const express=require("express");
const app=express();
const port=process.env.PORT || 3001;

// require the routers module
const router = require("./routers");

// use the router in your app
app.use(express.json(), router);

//server starts on port 3001
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});