const sendGrid = require('@sendgrid/mail');
const keys = require('../config/keys');

module.exports = ({ subject, recipients }, content) => {
    sendGrid.setApiKey(keys.sendGridKey);
    const msg = {
        to: recipients,
        from: 'no-reply@emaily.com',
        subject: subject,
        text: subject,
        html: content,
    };
    sendGrid.send(msg);
}