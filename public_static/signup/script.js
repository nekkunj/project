let i=0
$(()=>{

var username=$('#username')
var email=$('#email')
var password=$('#password')
var retypepassword=$('#retype-password')
$('#submit').click(()=>{
if(password.val()!=retypepassword.val()){
    $('#password-check').css('visibility','visible')
    $('#password-check').append('Retype Password')
    password.val('')
    retypepassword.val('')

}   

 

$.post('/details',{
    username:username.val(),
    email:email.val(),
    password:password.val()
        })
    })    


    $('.google').click(()=>{
        $.get('/google')
    })




    $('.profile-name').css('display','none')
    var dfgh=localStorage.getItem("name");
    if(localStorage.getItem('name')===null){
        console.log('Not login')
        $('.login-signup').css('display','inline-block')
    $('.profile-name').css('display','none')
    }
    else{
        $('.login-signup').css('display','none')
    $('.profile-name').css('display','inline')
    $('.profile-name span').append(`${dfgh}`)
        console.log(dfgh)
    }
    
    
    $('.signout-btn').click(()=>{
        localStorage.removeItem("name");
    })
    
})