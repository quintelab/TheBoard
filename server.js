var http = require('http');
var port = process.env.port || 1337
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//var ejsEngine = require('ejs-locals');
var controllers = require('./controllers');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser')
var session = require('express-session')

//Setup the View Engine
//app.set('view engine', 'jade'); // jade view engine
//app.engine('ejs', ejsEngine); //support master pages
//app.set('view engine', 'ejs'); // ejs view engine
app.set('view engine', 'vash'); // vash view engine

//Opt into Services
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'BrunoQuintellaSession' }));
app.use(flash());

//set the public static resource folder
app.use(express.static(__dirname + '/public'));

//use authentication
var auth = require('./auth');
auth.init(app);

//Map the routes
controllers.init(app);

app.get('/api/users', function (req, res) {
	res.set('Content-Type', 'application/json');
	res.send({ name: 'Bruno', isValid: true, group: 'Admin'});
});

var server = http.createServer(app).listen(port);
