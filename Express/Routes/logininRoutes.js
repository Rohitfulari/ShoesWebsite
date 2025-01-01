const express = require("express");
const mongoose = require("mongoose");
const loginModel = require("../Module/logininModule.js");
const loginRouter = express.Router();
const bcrypt = require("bcryptjs");

//register
loginRouter.post("/reg", async(req,res) => {
    let hashpassword =  await bcrypt.hash(req.body.pass,10);

    

    try {
        let user = loginModel({
            email:req.body.email,
            pass:hashpassword
                
        });
        let done  = await user.save();
    
        res.send("REGISTRATION SUCCESSFULLY");
        
    } catch (error) {
        console.log("Error is their in submission of data",error.message);
        res.status(500).json({error:error.message});
        
    }
    
})


//to get email from loginin to home

loginRouter.get("/useremail", async (req, res) => {
    try {
      let result2 = await loginModel.findOne({}, { email: 1, _id: 0 }); // Use `findOne` if you expect only one result
      if (result2) {
        res.send(result2.email); // Send the email as a string
      } else {
        res.status(404).json({ message: "Email not found" });
      }
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).json({ message: "An error occurred while fetching emails" });
    }
  });
  

module.exports = {
    loginRouter
};