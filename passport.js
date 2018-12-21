const passport=require('passport')
const users=require('./login_database')
const LocalStrategy=require('passport-local').Strategy
passport.serializeUser(function(user,done){
    done(null,user.username)
})

passport.deserializeUser(function(username,done){
    users.getdetails()
    .then((userdetails)=>{
        for(userdetail of userdetails ){
            if(userdetail.username===username.val()){
                return done(null,userdetail)  
             }
        }
        if(!userdetails){
            return done(new Error('no such user'))
        }
    })
    .catch((err)=>{
        done(err)
    })
})
passport.use(new LocalStrategy((username,password,done)=>{
    users.getdetails().then((userdetails)=>{
        for(userdetail of userdetails ){
            if(userdetail.username===username.val()){
            if( userdetail.password===password.val()){
                return done(null,userdetail)
            }            
            else{
             return done(null,false,{message:"Wrong Password"})
            }
         }
         else {
return done(null,false,{message: "Wrong username"}) 
        }
    
    }
    }).catch((err)=>{
        return done(err)
    })
}))

exports=module.exports=passport