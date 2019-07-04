var express = require('express');
var ds = require('./dateModule.js');
var JobApplication = require('./models/jobApplication');
var mongoose = require('mongoose');

var app = express();
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.set('view engine', 'ejs');

JobApplication.create({company: 'test', jobTitle: 'Test Position', status: "Submitted"},
    function(err, jobApplication) {
        if (err) return new Error(err);
    });

JobApplication.findOne({}).exec(function (err, jobApplications) {
    if (err) return new Error(err);
    console.log(jobApplications.jobTitle);
});

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