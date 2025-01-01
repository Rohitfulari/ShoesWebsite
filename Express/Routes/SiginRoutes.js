const express = require("express");
const mongoose = require("mongoose");
const SiginModule = require("../Module/logininModule");
const SiginRouter = express.Router();
const bcrypt = require("bcryptjs");


SiginRouter.post("/sigin", async (req, res) => {
    try {
        // Check if the user exists
        let emailChecker = await SiginModule.findOne({ email: req.body.email });

        if (!emailChecker) {
            return res.status(400).send("INVALID USER!");
        }

        // Compare the provided password with the stored hashed password
        let passChecker = await bcrypt.compare(req.body.pass, emailChecker.pass); // Fix: use emailChecker.pass
        if (!passChecker) {
            return res.status(400).send("INVALID PASSWORD!");
        }

        // If both email and password are valid
        res.send({
            message: 'LOGIN OR SIGN-IN SUCCESSFUL',
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
        });
    }
});


module.exports = {
    SiginRouter

};