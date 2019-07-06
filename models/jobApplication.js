var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

var jobApplicationSchema = new Schema({
    company: String,
    jobTitle: String,
    status: {
        type: String,
        enum: ['Submitted', 'Not Submitted', 'Replied - Declined', 'Replied - Accepted',],
        default: 'Submitted'
    },
    submittedDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);