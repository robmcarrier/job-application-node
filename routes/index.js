var express = require('express');
var router = express.Router();
var JobApplication = require('../models/jobApplication');

const testValues = [{text: "Hi", user: "Test guy"}, {text: "no", user: "Test guy 2"}];

/* GET home page. */
router.get('/', function (req, res, next) {
    JobApplication.find({}, function (err, jobApplications) {
        if (err) {
            console.log(err);
        } else {
            res.render('pages/index', {
                jobApplications: jobApplications
            });
        }
    });
});

router.post('/new', function (req, res) {
    JobApplication.create({company: req.body.company, jobTitle: req.body.jobTitle, status: 'Submitted'},
        function (err, jobApplication) {
        if (err) return new Error(err);
        res.redirect('/');
    });
});

router

module.exports = router;