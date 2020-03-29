//Keys.js - Figure out what set of credentials to return
//This will work only on Heroku
if (process.env.NODE_ENV &&
        process.env.NODE_ENV === 'production') {
    module.exports = require('./prod-keys')    
}
else {
    module.exports = require('./dev-keys')
}