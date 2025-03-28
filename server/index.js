const express  =require("express");
const app = express();
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); 
require("dotenv").config()
const CustomerRoute = require("./route/coustomer");
const dbConnect = require("./utils/db")   //database connection form utils

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.DB_CONNECTION).then(()=>{
//     console.log("DB IS CONNECTED");
// })

app.use("/BankData", CustomerRoute );

dbConnect.dbConnect();


const port = process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`Server is running on ${port} port`);
})