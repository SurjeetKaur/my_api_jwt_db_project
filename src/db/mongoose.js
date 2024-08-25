//connection with database
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const path=require("path");

//env file path
const envFilePath = path.resolve(__dirname,"../../.env")
dotenv.config({path: envFilePath})

//localhost setup with .env
const dbProtocol=process.env.DB_PROTOCOL
const dbHost=process.env.DB_HOST
const dbPort=process.env.DB_PORT
const dbName=process.env.DB_NAME

const dbConnectionString=`${dbProtocol}://${dbHost}:${dbPort}/${dbName}`; //http://127.0.0.1:27017/bank-data

//connection mongoose with database
mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Connected to the database :bank-data")
  }).catch((error)=>{
    console.log("Error connecting to the database :bank-data: ",error)
  })