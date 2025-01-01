let mongoose = require('mongoose');

let loginUserSchema = mongoose.Schema({
    email:String,
    pass:String
})

let logindetails = mongoose.model('loginuser',loginUserSchema)

module.exports = logindetails;