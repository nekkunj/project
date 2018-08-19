const title = require('express').Router()
const db=require('../login_database')
var temp
title.get('/', (req,res)=>{
    
    db.gettitle()
    .then((userdetails)=>{
        res.send(userdetails);    
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

// title.get('/delete', (req,res)=>{
//     db.deletetitle()
//     .then(()=>{    
//     })
//     .catch((err)=>{
//         res.status(500).send(err)
//     });

// })

title.post('/',(req,res)=>{
  
    db.addtitle(req.body.Job_Title)
    .then(()=>{          
res.redirect('/')
    })
    .catch((err)=>{
        res.send(err)
    })
})


exports = module.exports = {
    title
}