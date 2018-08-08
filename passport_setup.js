const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20')
const keys=require('./config/keys')
passport.use(
    // console.log(keys.google.clientId),
   new GoogleStrategy({
clientID:keys.google.clientId,
clientSecret:keys.google.clientSecret,
callbackURL:'/signup' 
    },function(accessToken, refreshToken, profile, cb) {
                 User.findOrCreate( function (err, user) {
                  cb(err, user);
               })
               
   })
)