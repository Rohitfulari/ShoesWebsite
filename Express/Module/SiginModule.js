let mongoose = require("mongoose");

let SiginSchema = mongoose.Schema({
    email:String,
    pass:String

});

let SiginDetails = mongoose.model('SiginUser',SiginSchema);

module.exports = SiginDetails;