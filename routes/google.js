const goo = require('express').Router()
const passport=require('passport')

goo.get('/',passport.authenticate('google',{
    scope:['profile']
}
))

goo.get('/check',passport.authenticate('google'),(req,res)=>{
    res.send('login check')
}
)



exports = module.exports = {
    goo
}