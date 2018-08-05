function check(userdetails){
    
    var username=$('#username')
    
    var password=$('#password')
for(userdetail of userdetails ){
    console.log(userdetail.username)
    if(userdetail.username===username.val()){
        if( userdetail.password===password.val()){
            location.href="/"
        }
        else{
         $('#status').append('Wrong Password')
        }
     }
     else{
         $('#status').append('Wrong Username')
     }

}
}

$(()=>{
    var username=$('#username')
    
    var password=$('#password')
    

    $('#submit').click(()=>{  
$.get('/details',function(userdetails){
check(userdetails)
})
    })


})
