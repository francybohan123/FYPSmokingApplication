var requests = require('config/requests');
var request = require('request');

module.exports = function(app){

	app.get('/', function(req, res){
		res.end("Social Media Smoking Application");

	});


	app.post('/', function(req, res){
		var name = req.body.name;
		var mobno = req.body.mobno;
		var reg_id = req.body.reg_id;

		requests.login(name,mobno,reg_id, function(found){
			console.log(found);
			res.json(found);
		});
	});

	app.post('/send', function(req, res){
		var fromone = req.body.fromone;
		var fromtwo = req.body.fromtwo;
		var tomessage = req.body.tomessage;
		var message = req.body.message;

		requests.send(fromone, fromtwo, tomessage, message, function(found){
			console.log(found);
			res.json(found);
		});
	});

	app.post('/getuser', function(req, res){
		var mobno = req.body.mobno;

		requests.getuser(mobno, function(found){
			console.log(found);
			res.json(found);
		});
	});

	app.post('/logout', function(req, res){
		var mobno = req.body.mobno;

		requests.removeuser(mobno, function(found){
			console.log(found);
			res.json(found);
		});
	});
};