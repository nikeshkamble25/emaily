const mongoose = require('mongoose');
const recipientSchema = require('./recipient');
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    totalRecipients: Number,
    recipients: [recipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date,
    deleted:{ type: Boolean, default: false }
});

mongoose.model('survey', surveySchema);