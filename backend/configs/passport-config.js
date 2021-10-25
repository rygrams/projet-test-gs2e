const User = require("../models/user")
const passport = require("passport");

//strategy d'authentification
const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// configuration creation de compte
passport.use(
    'signup',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await User.create({ email, password, type: "customer" });

                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

//configuration connexion
passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email });

                if (!user) {
                    return done(null, false, { message: 'utilisateur non trouvé' });
                }
                //verification du mot de passe saisi depuis la methode du model
                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, { message: 'Mot de passe incorrect' });
                }

                return done(null, user, { message: 'Connecté avec succès' });
            } catch (error) {
                return done({ message: "Vos identifiants n'existent pas" });
            }
        }
    )
);

//configuration jwt
const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

    User.findOne({ email: jwt_payload.user.email }, function (err, user) {

        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

exports.initialize = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
}
