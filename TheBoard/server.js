var http = require('http');
var port = process.env.port || 1337
var express = require('express');
var app = express();

//Setup the View Engine
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	//res.send('<html><body><h1>Express</h1></body></html>');
	res.render('jade/index', { title: 'Express + Jade' });
});

app.get('/api/users', function (req, res) {
	res.set('Content-Type', 'application/json');
	res.send({ name: 'Bruno', isValid: true, group: 'Admin'});
});

var server = http.createServer(app).listen(port);