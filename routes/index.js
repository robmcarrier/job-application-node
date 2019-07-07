var express = require('express');
var router = express.Router();
var JobApplication = require('../models/jobApplication');


/* GET home page. */
router.get('/', function (req, res, next) {
    JobApplication.find({}).sort({submittedDate: -1}).exec(function (err, jobApplications) {
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
    JobApplication.create(
        {company: req.body.company,
            jobTitle: req.body.jobTitle,
            status: 'Submitted',
            submittedDate: req.body.submittedDate,
        },
        function (err, jobApplication) {
            if (err) return new Error(err);
            res.redirect('/');
        });
});

router.post('/edit', function (req, res) {
    let query = {'_id': req.body._id};

    JobApplication.findOneAndUpdate(query,
        {
            company: req.body.company,
            jobTitle: req.body.jobTitle,
            status: req.body.status,
            submittedDate: req.body.submittedDate
        }, {upsert:true}, function (err, jobApplication) {
            if (err) return new Error(err);
            res.redirect('/');
        });
});

module.exports = router;