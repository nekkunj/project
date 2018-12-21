window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
$(()=>{
    
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
$(()=>{
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