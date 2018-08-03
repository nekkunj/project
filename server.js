const express=require('express')

const app=express()
const path=require('path')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', express.static(path.join(__dirname, 'public_static')))
app.use('/account/login',express.static(path.join(__dirname,'public_static/login')))
app.use('/account/signup',express.static(path.join(__dirname,'public_static/signup')))
app.use('/api', require('./routes').route)
app.use('/recruiter',express.static(path.join(__dirname,'public_static/new_recruiter_details')))
app.listen(4444,()=>{console.log('listening to port http://localhost:4444')})