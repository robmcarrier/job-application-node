var express = require('express');
var ds = require('./dateModule.js');
var app = express();

app.set('view engine', 'ejs');

const myLogger = function(req, res, next) {
    console.log("Request IP: " + req.ip);
    console.log("Request Method: " + req.method);
    console.log("Request date: " + ds.myDateTime());

    next();
};

app.use(myLogger);

app.get('/', function(req, res) {
    res.render('pages/index')
});

app.get('/about', function(req, res) {
    res.render('pages/about')
});

app.get('/contact-me', function(req, res) {
    res.render('pages/contact-me')
});

app.get('*', function(req, res) {
    res.render('pages/404')
});


app.listen(8080);