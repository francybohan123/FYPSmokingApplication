//dependencies: 
var express = require('express');
var mongoose = require('mongoose');
var connect = require('connect');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4000;
var app = express();

//connect to MongoDB: 
mongoose.connect('mongodb://francybohan:francybohan@ds121726.mlab.com:21726/myfbdb');

//express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.urlencoded());

//routes:
app.use('/api', require('./routes/api'));
//require('./routes/routes.js')(app);

app.listen(port);
console.log('Server is running on port: ' + port);