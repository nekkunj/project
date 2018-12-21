const passport=require('passport')
const express=require('express')
const GoogleStrategy=require('passport-google-oauth20')
const keys=require('./config/keys')
var session = require("express-session"),
    bodyParser = require("body-parser");
var app=express()

passport.use(
    // console.log(keys.google.clientId),
   new GoogleStrategy({
     
clientID:keys.google.clientId,
clientSecret:keys.google.clientSecret,cookiepolicy: 'single_host_origin',scope: 'profile',
callbackURL:('/google/check')    
},(accessToken,refreshToken,profile,done)=>{
               console.log(profile)
app.use(session({ secret: profile.id }));
   
            })
)