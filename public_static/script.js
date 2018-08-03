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
    let card=$('#card')
    var location=$('#location')
    var topschools=$('#topschools')
    var salary=$('#salary')
    var education=$('#education')
    var jobtype=$('#jobtype')
    location.click(()=>{
    $('#location-inside').toggle();
    })
    topschools.click(()=>{
        $('#topschools-inside').toggle();
    })
    salary.click(()=>{
        $('#salary-inside').toggle();
    })
  education.click(()=>{
    $('#education-inside').toggle();
  })
  jobtype.click(()=>{
    $('#jobtype-inside').toggle();
  })

function cards(recruiters){
    for(recruiter of recruiters){
        
        card.append(
           `
            <div  class=" row border container p-0 m-3 asdf" style="width:42rem;">
            <a title="${recruiter.Job_Title}"class=" anchor1 link p-1"  href="#"
            class="content active " style="width: 100%" target="_blank">
            <div style="text-align: center">
            ${recruiter.Job_Title}
            </div>
            <span class="bk-warning rupees" >
                
                </span>
                
                <span class="pl-5 text-dark">
                    <img class="mb-1" src="https://png.icons8.com/windows/1600/rupee.png" width="18" > ${recruiter.min_salary} - ${recruiter.max_salary}
            </span>
            <span class="pl-5 text-dark"><img src="http://cdn.onlinewebfonts.com/svg/img_356662.png" class="mb-1 mr-1" width="14.5"> 
            ${recruiter.minimum}-${recruiter.maximum} yrs
            </span>
            <div class="more p-2 text-dark">
                <span class='mb-1' style="display: flex; ">
                <div><em>Keyskills:</em></div>
                <div class="pl-5 text-dark">${recruiter.Keyskills}</div>
                </span>
                
                <span class='mb-2' style="display:flex; ">
                <div>&nbsp;&nbsp;<em>Job: description</em></div>
                <div class="pl-4 text-dark"> ${recruiter.Job_Description}</div>
                </span>
            </div>
            </a>
            <span class="other-details p-2" style="width: 100%">
                Current-Status:Available<img src="https://cdn1.iconfinder.com/data/icons/soft-toolbar-icons/512/check_apply_approved-512.png" width="15" class="ml-2 mb-1">
            <span style="float: right ;"><em>Posted by:</em>
                    <img src="https://imageog.flaticon.com/icons/png/512/3/3657.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" width="25" class="mb-1">
                Amit Gupta</span>
            </span>            
</div>
            `
        )
    }
}

  $.get('/api', function (recruiters) {
     cards(recruiters) 
})


})



