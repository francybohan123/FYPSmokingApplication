//dependencies: 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to MongoDB: 
mongoose.connect('mongodb://francybohan:francybohan@ds121726.mlab.com:21726/myfbdb');

//express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes:
app.use('/api', require('./routes/api'));

app.listen(4000);
console.log('Server is running on port 4000');