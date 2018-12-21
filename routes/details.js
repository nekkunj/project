const roote = require('express').Router()
const db=require('../login_database')
const pass=require('../passport')
roote.get('/', (req,res)=>{
    
    db.getuserdetails()
    .then((userdetails)=>{
        res.send(userdetails);    
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

roote.post('/',(req,res)=>{
  
    db.adduserdetails(req.body.username
        ,req.body.email,req.body.password)
    .then(()=>{          
res.redirect('/')
    })
    .catch((err)=>{
        res.send(err)
    })
})

roote.post('/check',(req,res)=>{
  pass.authenticate('local',{
      failureRedirect:'/account/login',
      successRedirct:'/'
  })
})

exports = module.exports = {
    roote
}