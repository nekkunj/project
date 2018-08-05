let places=["Agra","Ahmedabad","Alappuzha","Alwar","Amritsar","Aurangabad","Bangalore","Bharatpur","Bhavnagar","Bikaner","Bhopal","Bhubaneshwar","BodhGaya","Calangute","Chandigarh","Chennai","Chittaurgarh","Coimbator","Cuttack","Dalhousie","Dehradun","Delhi","Diu-Island","Ernakulam","Faridabad","Gaya","Gangtok","Ghaziabad","Gurgaon","Guwahati","Gwalior","Haridwar","Hyderabad","Imphal","Indore","Jabalpur","Jaipur","Jaisalmer","Jalandhar","Jamshedpur","Jodhpur","Junagadh","Kanpur","Kanyakumari","Khajuraho","Khandala","Kochi","Kodaikanal","Kolkata","Kota","Kottayam","Kovalam","Lucknow","Ludhiana","Madurai","Manali","Mangalore","Margao","Mathura","Mountabu","Mumbai","Mussoorie","Mysore","Manali","Nagpur","Nainital","Noida","Ooty","Orchha","Panaji","Patna","Pondicherry","Porbandar","Portblair","Pune","Puri","Pushkar","Rajkot","Rameswaram","Ranchi","Sanchi","Secunderabad","Shimla","Surat","Thanjavur","Thiruchchirapalli","Thrissur","Tirumala","Udaipur","Vadodra","Varanasi","Vasco-Da-Gama","Vijayawada","Visakhapatnam"]
let i=0;
$(()=>{
    var minimumyear=$('#minimum-year')
    var maximumyear=$('#maximum-year')
    var rsordollar=$('#rs-or-dollar')
    var minannualsalary=$('#min-annual-salary')
    var maxannualsalary=$('#max-annual-salary') 
    var locationlist=$('#location-list')
    var submit_button=$('#submit-button')
    var location=$('#location')
    var job_description=$('#job-description')
    var keywords=$('#keywords')
    var job_title=$('#job-title')
    var selectedlocations=$('#selected-locations')
    var locationlistlabel=$('.location-list-label')
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
    var k=100000
    for(var i=1;i<=15;i++){
        var l=25000
         k=+k + +l 
    minannualsalary.append(`<option>${k}</option>`)
    }

    minannualsalary.click(()=>{
        
        maxannualsalary.children().remove()
        maxannualsalary.append(`<option>Max Annual Salary</option>`)
        if(minannualsalary.val()==='Min Annual Salary') return
        var j=minannualsalary.val()
        var l=10000
        
        for(var i=1;j<=90000;i++)
        {
            j=+j + +l
            maxannualsalary.append(`<option>${j}</option>`) 
        }
        l=25000;
        for(var i=1;i<=15;i++)
        {
            j=+j+ +l 
            maxannualsalary.append(`<option>${j}</option>`) 
        }   
    })



rsordollar.click(()=>{
    maxannualsalary.children().remove()
    maxannualsalary.append(`<option>Max Annual Salary</option>`)
    minannualsalary.children().remove()
    minannualsalary.append(`<option>Min Annual Salary</option>`)
    minannualsalary.append(`<option>Less than 5000</option>`)
    var k=0
    for(var i=1;i<=20;i++){
        var l=5000
         k=+k + +l 
    minannualsalary.append(`<option>${k}</option>`)
    }
    minannualsalary.append(`<option>100000 and above</option>`)
    

    minannualsalary.click(()=>{
        
        maxannualsalary.children().remove()
        maxannualsalary.append(`<option>Max Annual Salary</option>`)
        if(minannualsalary.val()==='Min Annual Salary') return
        var j=minannualsalary.val()
        var l=5000
        
        for(var i=1;i<=4;i++)
        {   
            maxannualsalary.append(`<option>${j}</option>`)
            j=+j + +l
             
        }
    })

})
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

$('.low-icon').click(function(){
 if(i%2===0){
    locationlist.css('display','block')
    for(place of places){    
    locationlist.append(`
    <label ><input class="location-list-label" type="checkbox">${place}</label><br>
    `)
    }
 }
 else{
    locationlist.css('display','none')
 }
i++
})

locationlist.click(()=>{
    

selectedlocations.append(`
<div class="bg-light">Selected-Locations
<span style="float:right"><a href="#">[Remove all]</a></span>
</div>
<div>
<span class="m-1" style="background-color:gray;">
${locationlistlabel.val()}
<span>
</div>
`)
})






})
