var nconf = require("nconf"),
	express = require('express'),
	app = express();

nconf.env().file({file: ".env"});

var port = nconf.get("PORT");

app.get('/', function(req, res) {
	res.status(200).end();
});

app.post('/', function(req, res) {
	res.status(200).end();
});

app.listen(port, function() {
	console.log("Listening on " + port);
});	