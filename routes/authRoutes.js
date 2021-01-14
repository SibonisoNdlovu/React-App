const passport = require('passport');
//on load
//google has internal identifire of google
//scope specifies what access we want ==> profile and email
module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //user sent back to our server and we redirect the user back to google 
    //with code and google will exchange code for user profile
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/surveys');
        }
    );
    //create a route handler
    // app.get('/', (req, res) => {
    //     res.send({hi: 'there'});
    // })

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}
