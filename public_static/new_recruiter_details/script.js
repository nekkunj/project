
$(()=>{
    var minimumyear=$('#minimum-year')
    var maximumyear=$('#maximum-year')
    var rsordollar=$('#rs-or-dollar')
    var minannualsalary=$('#min-annual-salary')
    var maxannualsalary=$('#max-annual-salary') 

    var submit_button=$('#submit-button')
    var location=$('#location')
    var job_description=$('#job-description')
    var keywords=$('#keywords')
    var job_title=$('#job-title')

    for(var i=0;i<=25;i++){
    minimumyear.append(`<option class="minimum-options">${i}</option>`)
    }
    
    minimumyear.click(()=>{
        maximumyear.children().remove()
        maximumyear.append(`<option>-Maximum-</option>`)
        if(minimumyear.val()==='-Minimum-') return
                
        var j=minimumyear.val()
        
        for(var i=0;i<=6;i++){
            var k=+i + +j
            maximumyear.append(`<option>${k}</option>`)
            }
    })
var k=50000
    for(var i=1;i<=5;i++){
        var l=10000
         k=+k + +l 
    minannualsalary.append(`<option>${k}</option>`)
    }


   submit_button.click(()=>{
 console.log(`${job_title.val()}\n${job_description.val()}\n${keywords.val()}\n${minimumyear.val()}`)   
    $.post('/api',{
      Job_Title:job_title.val(),
      Job_Description:job_description.val(),
      keywords:keywords.val(),
      minimum:minimumyear.val(),
      maximum:maximumyear.val(),
      min_salary:minannualsalary.val(),
      max_salary:maxannualsalary.val(),
      location:location.val(),
      employment_type:'Permanent',
      job_type:'Full Time'
     })
   })

 

})
