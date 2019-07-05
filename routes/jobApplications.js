var express = require('express');
var router = express.Router();
var JobApplication = require('../models/jobApplication');

router.get('/new', function(req, res, next) {
    res.render('pages/form');
});

router.get('/delete/:id', function(req, res, next) {
    JobApplication.find({_id: req.params.id}).remove().exec();
    res.redirect('/');
});

module.exports = router;