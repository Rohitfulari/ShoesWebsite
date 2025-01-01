const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true }
});

const ProductModule = mongoose.model("Product", ProductSchema);

module.exports = ProductModule;
