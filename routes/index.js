const route = require('express').Router()
const db=require('../db')
const passport=require('passport')
// const cors=require('cors')




route.get('/', (req,res)=>{
    
    db.getrecruiterdetails()
    .then((recruiterdetails)=>{
        
        res.send(recruiterdetails);
        
        
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})

route.post('/',(req,res)=>{
console.log(req.body.salary_type)
    db.addrecruiterdetails(req.body.Job_Title,req.body.Job_Description,req.body.keywords,req.body.minimum
        ,req.body.maximum,req.body.min_salary,req.body.max_salary,req.body.location
        ,req.body.employment_type,req.body.job_type,req.body.recruiter_name,req.body.company_name,req.body.address
        ,req.body.company_details,req.body.salary_type,req.body.industry,req.body.role,req.body.email_address,req.body.more_salary_details,
        req.body.functional_area,req.body.telephone,req.body.website)
    .then(()=>{
    })
    .catch((err)=>{
        res.send(err)
    })
})


exports = module.exports = {
    route
}
