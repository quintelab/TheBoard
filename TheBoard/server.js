var http = require('http');
var port = process.env.port || 1337
var express = require('express');
var app = express();
var ejsEngine = require('ejs-locals');

//Setup the View Engine
//app.set('view engine', 'jade'); // jade view engine
app.engine('ejs', ejsEngine); //support master pages
app.set('view engine', 'ejs'); // ejs view engine

app.get('/', function (req, res) {
	//res.render('jade/index', { title: 'Express + Jade' });
    res.render('ejs/index', { title: 'Express + EJS' });
});

app.get('/api/users', function (req, res) {
	res.set('Content-Type', 'application/json');
	res.send({ name: 'Bruno', isValid: true, group: 'Admin'});
});

var server = http.createServer(app).listen(port);