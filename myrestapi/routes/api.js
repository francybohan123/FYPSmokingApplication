//dependencies:
var express = require('express');
var router = express.Router();
var requests = require('config/requests');
var request = require('request');

//get models: 
var Status = require('../models/status');

//routes:
Status.methods(['get', 'post', 'put', 'delete']);
Status.register(router, '/status');

//return router: 
module.exports = router;