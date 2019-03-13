const Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/userModel');
const Bcrypt = require('bcrypt');

Passport.serializeUser((user, done)=>{
    done(null, user.id);
});

Passport.deserializeUser((id, done)=>{
    User.findById(id).then(user=>{
        return(null, user);
    })
});

Passport.use(new LocalStrategy({
    userNameField: 'username',
    passwordField: 'password'
},
    function(username, password, done) {
        try {
            // Login por nombre de usuario
            if (username.indexOf('@') !== -1){
                // let email = identifier;
                console.log("VVVVVVVVVVVVVVVVVVVVVVVVVV");
                UserModel.findOne({where : { email: username }}).then(function (err, user) {
                    if (err) { return done(err); }
                    if (!user) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }
                    if (Bcrypt.compareSync(password, user.password)) {
                        return done(null, user);

                    } else {
                        return done(null, false,{message: "Invalid password or email"});

                    }
                    return done(null, user);
                });
            } else{
                // Login por email
                // let username = identifier;
                console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
                UserModel.findOne({where : { usuario: username }}).then(user=> {
                    // if (err) { return done(err); }
                    console.log(password);
                    if (!user) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }
                    if (Bcrypt.compareSync(password, user.password)) {
                        return done(null, user);

                    } else {
                        console.log("ENTRO");
                        return done(null, false,{message: "Invalid password or email"});
                    }
                    console.log(user);
                    console.log("FINAL");
                    return done(null, user);
                });
            }
        } catch (e) {
            console.log(e);
        }

    }
));

module.exports = Passport;
