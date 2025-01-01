let mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/shoesLoginin').then(() => {
    console.log("CONNECTION DONE !");


})

module.exports = mongoose.connection;