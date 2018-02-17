//dependencies: 
var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
        emailAddress: String,
        password: String,
        firstname: String,
        surname: String,
        dateOfBirth: Date,
        dateOfQuittingSmoking: Date,
        numberSmokedPerDay: Number,
        numberPerPacket: Number,
        pricePerPacket: Number,
});

//return models: 
module.exports = restful.model('tblstatus', statusSchema);