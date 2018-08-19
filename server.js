const express=require('express')

const app=express()

const path=require('path')
const passportSetup=require('passport')
const passport=require('./passport_setup')
// app.set('view engine','hbs')
// const mon=require('mongoose')



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', express.static(path.join(__dirname, 'public_static')))
app.use('/description', express.static(path.join(__dirname, 'public_static/all_description')))
app.use('/account/login',express.static(path.join(__dirname,'public_static/login')))
app.use('/account/signup',express.static(path.join(__dirname,'public_static/signup')))
app.use('/api', require('./routes').route)
app.use('/details',require('./routes/details').roote)
app.use('/google', require('./routes/google').goo)
app.use('/title',require('./routes/title').title)
app.use('/termsconditions',express.static(path.join(__dirname,'public_static/termsconditions')))
app.use('/recruiter',express.static(path.join(__dirname,'public_static/new_recruiter_details')))
app.listen(4444,()=>{console.log('listening to port http://localhost:4444')})
