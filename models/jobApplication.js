var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var jobApplicationSchema = new Schema({
    company: String,
    jobTitle: String,
    status: {
        type: String,
        enum: ['Submitted', 'Not Submitted', 'Replied - Declined', 'Replied - Accepted',]
    }
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);