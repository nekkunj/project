const goo = require('express').Router()
// const passport=require('passport')

goo.get('/',passport.authenticate('google',{
    scope:['profile']
}))





exports = module.exports = {
    goo
}