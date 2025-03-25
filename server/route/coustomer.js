const express = require("express");
const route = express.Router();
const CustomerController = require("../Controller/coustControol");


route.post("/InsertData", CustomerController.InsertUserData );
route.post("/CustomerLogin", CustomerController.CustomerLoginData);
route.post("/transaction" , CustomerController.SubmitCashData)
route.get("/balance" , CustomerController.balanceDisplay)
route.post("/accountstatement",CustomerController.Accountstate)
route.post("/ministatement",CustomerController.Ministatement)
route.post("/searchState",CustomerController.Searchstatement)
route.post("/changepasswo",CustomerController.Changepass)
route.post("/otpgenerate",CustomerController.Optgenerate)








module.exports = route;