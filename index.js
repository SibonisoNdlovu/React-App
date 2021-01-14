const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express(); 

//used for post,put and patch to parse body and assign to req.body
app.use(bodyParser.json());
//set cookie to last for 30days
app.use(
    cookieSession({
        maxAge: 30* 24*60*60*1000,
        keys:[keys.cookieKey] 
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    // express will serve up production assests
    // like our main.js file or main.css file
    app.use(express.static('client/build'));

    // express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT||5000; 
app.listen(PORT);