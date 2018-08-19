var title;
var newdesc;
window.onscroll = function() {scrollFunction()
    if($(window).scrollTop() + $(window).height() > $(document).height() -50 ) {
        $('.reload-spinner').css('visibility','visible')
        setTimeout(function(){ $('.reload-spinner').fadeOut();
        $('.dfgh').css('display','flex')       
        }, 3000);        
            }
};
$(window).scroll(function() {
//     if($(window).scrollTop() + $(window).height() > $(document).height() -50 ) {
// setTimeout(function(){ $('.reload-spinner').fadeOut();
// $('.dfgh').css('display','block')       
// }, 3000);        
//     }
 });

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

$(()=>{
    

    let card=$('#card')
    var location=$('.location')
    var topschools=$('.topschools')
    var salary=$('.salary')
    var education=$('.education')
    var jobtype=$('.jobtype')
    var morelocationdetails=$('.morelocations-details')
    var moreeducationdetails=$('.more-education-details')
    var moreschoolsdetails=$('.more-schools-details')
var new_filter_click=$('.new-filter-click')
    var moresalarydetails=$('.more-salary-details')

    var crossicon=$('.cross-icon')
    location.click(()=>{
    $('.location-inside').slideToggle();
    })
    topschools.click(()=>{
        $('.topschools-inside').slideToggle();
    })

    salary.click(()=>{
        $('.salary-inside').slideToggle();
    })
  education.click(()=>{
    $('.education-inside').slideToggle();
  })
  jobtype.click(()=>{
    $('.jobtype-inside').slideToggle();
  })

function cards(recruiters){
    for(recruiter of recruiters){   
        newdesc=""
        
    for(var g=0;g<120;g++){
        if(g<recruiter.Job_Description.length){
        newdesc+=recruiter.Job_Description[g]
    }}
        var i=1;   
        card.append(
           `
            <div  class=" row  container p-0  mt-3 ml-1 dfgh asdf" style="display:none; ">
            <a title="${recruiter.Job_Title}" class=" anchor1 link p-1 links content active " 
            style="width: 100%" target="_blank"  href="/description"
                  onclick="titleasd($(this))"  >
            <div style="text-align: center" class="anchor-title">
            ${recruiter.Job_Title}
            </div>
            <div class="salary-and-experience p-2">
                <span class="pl-5 text-dark">
                    <img class="mb-1" src="https://png.icons8.com/windows/1600/rupee.png" width="18" > ${recruiter.min_salary} - ${recruiter.max_salary}
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
}

  $.get('/api', function (recruiters) {
     cards(recruiters)
})

$('.morelocations').click(()=>{

$('.morelocations-details').slideDown();
morelocationdetails.css('z-index','1100')
morelocationdetails.css('position','fixed')
morelocationdetails.css('border','2px solid gray')
morelocationdetails.css('left','10%')
morelocationdetails.css('top','15%')
morelocationdetails.css('background-color','white')
morelocationdetails.css('width','65%')
morelocationdetails.css('height','auto')
})

$('.more-education').click(()=>{
$('.more-education-details').slideDown();
moreeducationdetails.css('z-index','1100')
moreeducationdetails.css('position','fixed')
moreeducationdetails.css('border','2px solid gray')
moreeducationdetails.css('left','10%')
moreeducationdetails.css('top','15%')
moreeducationdetails.css('background-color','white')
moreeducationdetails.css('width','65%')
moreeducationdetails.css('height','auto')    
})



$('.more-schools').click(()=>{
$('.more-schools-details').slideDown();
moreschoolsdetails.css('z-index','1100')
moreschoolsdetails.css('position','fixed')
moreschoolsdetails.css('border','2px solid gray')
moreschoolsdetails.css('left','10%')
moreschoolsdetails.css('top','15%')
moreschoolsdetails.css('background-color','white')
moreschoolsdetails.css('width','65%')
moreschoolsdetails.css('height','auto')    
})


$('.more-salary').click(()=>{
    moresalarydetails.slideDown();
    moresalarydetails.css('z-index','1100')
    moresalarydetails.css('position','fixed')
    moresalarydetails.css('border','2px solid gray')
    moresalarydetails.css('left','10%')
    moresalarydetails.css('top','15%')
    moresalarydetails.css('background-color','white')
    moresalarydetails.css('width','65%')
    moresalarydetails.css('height','auto')    
    })
    

 morelocationdetails.click((event)=>{
    event.stopPropagation(),
morelocationdetails.css('display','block');
 })
 
 $('.morelocations').click((event)=>{    
    event.stopPropagation(),
morelocationdetails.css('display','block');

 })

$('body').click(()=>{
    morelocationdetails.css('display','none'),
    moreeducationdetails.css('display','none')
    moresalarydetails.css('display','none');
    moreschoolsdetails.css('display','none');
})

crossicon.click((event)=>{    
    event.stopPropagation(),
morelocationdetails.css('display','none'),
moreeducationdetails.css('display','none');
moresalarydetails.css('display','none');
moreschoolsdetails.css('display','none');
 })

// edadawd

moreeducationdetails.click((event)=>{
    event.stopPropagation(),
moreeducationdetails.css('display','block');
 })

 $('.more-education').click((event)=>{    
    event.stopPropagation(),
moreeducationdetails.css('display','block');
 })

 moresalarydetails.click((event)=>{
    event.stopPropagation(),
moresalarydetails.css('display','block');
 })

 $('.more-salary').click((event)=>{    
    event.stopPropagation(),
moresalarydetails.css('display','block');
 })

 moreschoolsdetails.click((event)=>{
    event.stopPropagation(),
moreschoolsdetails.css('display','block');
 })

 $('.more-schools').click((event)=>{    
    event.stopPropagation(),
moreschoolsdetails.css('display','block');
 })
 
new_filter_click.click(()=>{
    $('.new-filter-details').slideToggle()

})

// setTimeout(function(){ $('.reload-spinner').fadeOut(); }, 3000);
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

})

