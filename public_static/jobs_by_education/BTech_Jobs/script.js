
var title;
var newdesc;
var resultscount=0;
window.onscroll = function() {scrollFunction()
    if($(window).scrollTop() + $(window).height() > $(document).height() -50 ) {
        $('.reload-spinner').css('visibility','visible')
        setTimeout(function(){ 
            
            $('.reload-spinner').fadeOut();
        
        // $('.dfgh').css('display','flex')       
        }, 3000);        
            }
};
function suggestedresults(rescount){
    $('.suggested-results-div').children('div').remove()
    $('.suggested-results-div').append(`
    <div class="suggested-results other-details container row  asdf ml-1">${rescount} suggested results</div>
`)
}

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

function titleasd(e){
    console.log(e.attr('title'))
//   $.get('/title/delete');
    $.post('/title',{Job_Title:e.attr('title')});
    
}
function drawcards(recruiter){
    resultscount +=1
    newdesc=""
        
    for(var g=0;g<120;g++){
        if(g<recruiter.Job_Description.length){
        newdesc+=recruiter.Job_Description[g]
    }}
        var i=1;   
        let card=$('#card')
        card.append(
           `
            <div  class=" row  container p-0  mt-3 ml-1 dfgh asdf cardnumber" >
            <a title="${recruiter.Job_Title}" class=" anchor1 link p-1 links content active " 
            style="width: 100%" target="_blank"  href="/description"
                  onclick="titleasd($(this))"  >
            <div style="text-align: center" class="anchor-title">
            ${recruiter.Job_Title}
            </div>
            <div class="salary-and-experience p-2">
                <span class="pl-5 text-dark">
                <img class="mb-1 rupee-image"  src="https://png.icons8.com/windows/1600/rupee.png" width="18" >  ${recruiter.min_salary} - ${recruiter.max_salary}
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
                
                <span class='mb-2 ' style="display:flex; ">
                <div>&nbsp;&nbsp;<em>Job: description</em></div>
                <div class="pl-4 text-dark"> ${newdesc}...</div>
                </span>
            </div>
            </a>
            <span class="other-details p-2" style="width: 100%">
            <label class="current-status-available"> Current-Status:Available</label><img src="https://cdn1.iconfinder.com/data/icons/soft-toolbar-icons/512/check_apply_approved-512.png" width="15" class="ml-2 mb-1">
            <span style="float: right ;"><em>Posted by:</em>
                    <img src="https://imageog.flaticon.com/icons/png/512/3/3657.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" width="25" class="mb-1">
                Amit Gupta</span>
            </span>            
</div>
            `
        )

}

$(()=>{
    

function cards(recruiters){
    for(recruiter of recruiters){   
        var werbc=recruiter.pg.split(',')
        var werug=recruiter.ug.split(',')
            for(werasd of werbc){    
        if(werasd==='BTech'){
            drawcards(recruiter)
        }   }
        for(werasdf of werug){    
            if(werasdf==='BTech'){
                drawcards(recruiter)
            }   }
            
    }
    suggestedresults(resultscount)
  
}

  $.get('/api', function (recruiters) {
     cards(recruiters)
})


    

 

setTimeout(function(){ $('.reload-spinner').fadeOut(); }, 3000);
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });
 

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

