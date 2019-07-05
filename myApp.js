var express = require('express'),
    ds = require('./dateModule.js'),
    JobApplication = require('./models/jobApplication'),
    mongoose = require('mongoose'),
    createError = require('http-errors'),
    path = require('path'),
    indexRouter = require('./routes/index'),
    bodyParser = require('body-parser'),
    jobApplicationRouter = require('./routes/jobApplications');

var app = express();
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// JobApplication.create({company: 'test', jobTitle: 'Test Position', status: "Submitted"},
//     function (err, jobApplication) {
//         if (err) return new Error(err);
//     });

// JobApplication.findOne({}).exec(function (err, jobApplications) {
//     if (err) createError(err);
//     console.log(jobApplications.jobTitle);
// });

const myLogger = function (req, res, next) {
    console.log("Request IP: " + req.ip);
    console.log("Request Method: " + req.method);
    console.log("Request date: " + ds.myDateTime());

    next();
};

app.use(myLogger);
app.use('/', indexRouter);
app.use('/jobApplications', jobApplicationRouter);

app.get('*', function (req, res) {
    res.render('pages/404')
});


app.listen(8080);