const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    // loginId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //     required : [true,"UserId is required"],
    // },
    email:{
        type:String,
        required:[true,"Image URL is required"],

    },
    img: {
        type: String,
        required: [true, "Image URL is required"],
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
});

const CartModule = mongoose.model("Cart", CartSchema);
module.exports = CartModule;
