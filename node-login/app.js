'use strict';

const express    = require('express');        
const app        = express();                
const bodyParser = require('body-parser');
const logger 	   = require('morgan');
const router 	   = express.Router();
const port 	   = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(logger('dev'));
//app.use(express.static('../client'));
require('./routes')(router);
app.use('/api/v1/', router); //change this if starting again

app.listen(port);

console.log(`App Runs on ${port}`);