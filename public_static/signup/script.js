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
})
 

if(i==1){$.post('/details',{
    username:username.val(),
    email:email.val(),
    password:password.val()
        })
    }

})