const express = require("express");
const mongoose = require("mongoose");
const CartModule = require("../Module/CartModule.js");
const CartRouter = express.Router();

//APi ENDPOINT FOR CART DATA SAVE IN DATABASE
CartRouter.post("/cart", async (req, res) => {
    try {
        const { email, img, title, price } = req.body;

        // Validate input fields
        if (!email || !img || !title || !price) {
            return res.status(400).json({ error: "All fields (email, img, title, price) are required" });
        }

        // Create a new cart item associated with the loginId
        let cartItem = new CartModule({ email, img, title, price });

        await cartItem.save();

        res.status(200).json({ message: "The cart item has been entered!", data: cartItem });
    } catch (error) {
        console.error("Error occurred while saving cart data:", error.message);
        res.status(500).json({ error: error.message });
    }
});


// API Endpoint for fetching cart data from the database
CartRouter.get("/emailcart", async (req, res) => {
    const { email } = req.query; // Get email from query params

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const cartItems = await CartModule.find({ email }); // Fetch cart items for the email
        res.json(cartItems);
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ message: "Failed to fetch cart items" });
    }
});


module.exports = {
    CartRouter,
};