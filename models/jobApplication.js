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
    },
    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    });

jobApplicationSchema.virtual('formattedDate').get(function () {
    return (this.submittedDate.getMonth() + 1).toString().padStart(2, 0) + "/" + (this.submittedDate.getDate() + 1).toString().padStart(2, 0) + "/" + this.submittedDate.getFullYear();
});

jobApplicationSchema.virtual('rowClass').get(function() {
    if (this.status === "Not Submitted") {
        return "notsubmitted";
    } else {
        return this.status.split(" ").pop();
    }
})

module.exports = mongoose.model('JobApplication', jobApplicationSchema);