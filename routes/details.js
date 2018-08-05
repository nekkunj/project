const roote = require('express').Router()
const db=require('../login_database')

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

roote.post('/next',(req,res)=>{
    res.redirect('/')
})
exports = module.exports = {
    roote
}