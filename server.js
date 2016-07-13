var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.listen(port);

//var connect = require('connect');
//var serveStatic = require('serve-static');
//var port = (3000);
//var host = ('localhost');
//connect().use(serveStatic(__dirname)).listen(port,host);
