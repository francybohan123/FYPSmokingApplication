'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({ 

	name 			: String,
	email			: String, 
	hashed_password	: String,
	dateOfBirth		: String,
	dateOfQuittingSmoking: String,
	numberSmokedPerDay: String,
	pricePerPacket 	: String,
	numberPerPacket	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String
	
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://francybohan:francybohan@ds121726.mlab.com:21726/myfbdb', { useMongoClient: true });
//mongoose.connect('mongodb://localhost:27017/node-login')
module.exports = mongoose.model('user', userSchema);            
