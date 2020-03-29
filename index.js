const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyparser = require('body-parser');

require('./models/user')
require('./models/survey')
require('./services/passport');
const app = express();

app.use(bodyparser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //Express will server up production assets
    //like our main.js or main.css files!
    app.use(express.static('client/build'));
    //Express will serve up the index.html File
    //if it doesnt recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//========================================
//==================Testing===============
//========================================
// app.get('/', (req, resp) => {
//     resp.send({ hi: "there change 2" });
// });
//========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT);