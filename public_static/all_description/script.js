window.onscroll = function() {scrollFunction()};
var newdesc
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


function description(recruiters){
   
    var jobtitle
    $.get('/title',function(title){
        jobtitle= title;
        check(recruiters,jobtitle)
       
    })

    


}

function check(abcd,temptitle){    
    for(jobs of abcd){
        if(jobs.Job_Title ===temptitle[0].Job_Title){
makedescription(jobs)
}}
}

function makedescription(recruiter){
   console.log(recruiter.job_type)

     newdesc=""
        
    for(var g=0;g<120;g++){
        if(g<recruiter.Job_Description.length){
        newdesc+=recruiter.Job_Description[g]
        }
    }

    var card=$('#card')
    var description=$('.description')
    card.append(` <div  class=" row  container col-12 col-sm-10 col-lg-6 col-md-8 p-2 m-3 asdf" >
    <div title="${recruiter.Job_Title}" class=" anchor1 link p-1 links content text-primary" 
    style="width: 100%" target="_blank"  
           >
    <div style="text-align: center" class="anchor-title">
    ${recruiter.Job_Title}
    </div>
    <div class="salary-and-experience p-2">
        <span class="pl-5 text-dark">
            <img class="mb-1 rupee-image"  src="https://png.icons8.com/windows/1600/rupee.png" width="18" > <img class="mb-1 dollar-image" src="https://www.freepngimg.com/thumb/dollar/1-2-dollar-transparent-thumb.png" width="18" > ${recruiter.min_salary} - ${recruiter.max_salary}
    </span>
    <span class="pl-5 text-dark"><img src="http://cdn.onlinewebfonts.com/svg/img_356662.png" class="mb-1 mr-1" width="14.5"> 
    ${recruiter.minimum}-${recruiter.maximum} yrs
    </span>
    </div>
    <div class="more p-2 text-dark">
        <span class='mb-1' style="display: flex; ">
        <div><em>Keyskills:</em></div>
        <div class="pl-5 text-dark">${recruiter.keywords}</div>
        </span>
        
        <span class='mb-2' style="display:flex; ">
        <div>&nbsp;&nbsp;<em>Job: description</em></div>
        <div class="pl-4 text-dark"> ${newdesc} . . . . .</div>
        </span>
    </div>
    </div>
    <div class=".again-buttons ">
    <span>
           <span class="login-signup">
            <a class="btn btn-success " href="/account/login">Login/Register to Apply</a>
            <a class="btn btn-warning  " href="#">Apply without Registration</a>
</span>
<span class="profile-name">
<a class="btn btn-primary m-2" href="#">Apply here</a> 
</span>
    </span>
    </div>
    </div>
    `)
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
    
  
   if(recruiter.salary_type=='Dollar'){
       $('.rupee-image').css('display','none')
   }
   else {
    $('.dollar-image').css('display','none')
   }

    description.append(`
    <h5><b >Job Description</b></h5><br>
                  
    <h6 class="m-0">Job Summary</h6>
    <br>${'<p>'+recruiter.Job_Description.split('\n').join('</p><p>')+'</p>'}
    <br><br>
    <b>Keywords</b>: 
    <br>
    <ul style="display:flex;list-style-type: none;flex-wrap: wrap;padding:10px;" id="keywords-append">
    
    </ul>
    <br><br>
    <h6>Desired Candidate Profile</h6><br>
    Please refer to the Job description above
    <br>
    Education-<br>
    <div class="mr-5" style="display:flex">
        <span class="text-secondary">UG:</span>
        <span> ${recruiter.ug}  </span>
    </div>
    <div style="display:flex">
    <span class="text-secondary">PG:</span>
    <span>${recruiter.pg} </span>
    </div>
    <div style="display:flex">
    <span class="text-secondary">Doctorate:</span>
    <span>Doctorate not required</span>
    </div>
    <br><br>
    
    
    
    <div style="display:flex">
        <div class="mr-4" style="color:gray;">Salary:<br>Industry:<br>Functional Area:<br>
            Role Category:<br>Role:<br>Employment Type: </div>
        <div> ${recruiter.salary_type} ${recruiter.min_salary} - ${recruiter.max_salary} ${recruiter.more_salary_details}
            <br>${recruiter.industry}<br>${recruiter.functional_area}<br>
            Teachers<br>${recruiter.role}<br>${recruiter.employment_type} Job, ${recruiter.job_type} Job</div>
    </div>
    <br>
    <h5 class="border-top border-dark ">Company Profile:</h5>
    <br>
    <h6> ${recruiter.company_name}</h6>
    ${recruiter.company_details}
    
    <br><br>
    <a class="contact-details active " style="text-decoration: none"  ><h4>Contact details</h4></a>
    
    <div class="contact-details-div border-top border-dark" >
    <div class="mr-4 " style="color:gray;">
    Recruiter name<br>Contact Company<br>Address:<br>Email Address:<br>Telephone:<br>Website
    </div>
    <div>${recruiter.recruiter_name}<br>${recruiter.company_name}<br>${recruiter.address} <br>${recruiter.email_address}<br>
    ${recruiter.telephone}<br>${recruiter.website}
    
    </div>    
    
    </div>
    `)
    var key_arr=recruiter.keywords.split(',')
$.each(key_arr,function(key,val){
    $('#keywords-append').append(`
    <li class="bg-secondary m-1">${val}</li>`) 
})
}

$(()=>{
  
    $.get('/api', function (recruiters) {
        description(recruiters) 
   })

//    $.get('/title',function(title){
//        jobtitle= title;
       
// console.log(jobtitle[0].Job_Title)

// //   $.get('/title/delete')
//     })

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


