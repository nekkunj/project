const goo = require('express').Router()
const passport=require('passport')

goo.get('/',passport.authenticate('google',{
    scope:['profile'],
    successRedirect: '/google/check',
    failureRedirect: '/login'
}
))

goo.get('/check',passport.authenticate('google'),(req,res)=>{
    res.send('login check')
}
)



exports = module.exports = {
    goo
}