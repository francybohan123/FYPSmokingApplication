//dependencies: 
var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
        emailAddress: String,
        password: String,
        //firstName: String,
        //surname: String,
        //dateOfBirth: Date,
        //dateOfQuittingSmoking: Date,
        //numberSmokedPerDay: Number,
        //priceOfPacket: Number,
});

//return models: 
module.exports = restful.model('tblstatus', statusSchema);