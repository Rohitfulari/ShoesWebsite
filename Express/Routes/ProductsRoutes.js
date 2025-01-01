const express = require("express");
const mongoose = require("mongoose");
const ProductModule = require("../Module/ProductsModule.js");
const ProductRouter = express.Router();

ProductRouter.post("/products", async (req, res) => {
    try {
        // Validate request body
        if (!req.body.img || !req.body.title || !req.body.price) {
            return res.status(400).json({ error: "All fields (img, title, price) are required" });
        }

        // Create and save the product
        let Allproducts = new ProductModule({
            img: req.body.img,
            title: req.body.title,
            price: req.body.price,
        });

        await Allproducts.save();

        res.status(201).json({ message: "PRODUCT ADDED SUCCESSFULLY!" });
    } catch (error) {
        console.log("Error occurred in submission of data:", error.message);
        res.status(500).json({ error: error.message });
    }
});

ProductRouter.get("/getproducts", async (req, res) => {
    try {
        let result = await ProductModule.find();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = {
    ProductRouter
}
