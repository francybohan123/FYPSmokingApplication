//dependencies: 
var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
	firstName: String, 
	surname: String, 
	dateOfBirth: Date,
	dateOfQuittingSmoking: Date,
	amountSmokedPerDay: Number,
	amountPerPacket: Number, 
	pricePerPacket: Number
});

//return models: 
module.exports = restful.model('tblstatus', statusSchema);