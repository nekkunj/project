let places=["Agra","Ahmedabad","Alappuzha","Alwar","Amritsar","Aurangabad","Bangalore","Bharatpur","Bhavnagar","Bikaner","Bhopal","Bhubaneshwar","BodhGaya","Calangute","Chandigarh","Chennai","Chittaurgarh","Coimbator","Cuttack","Dalhousie","Dehradun","Delhi","Diu-Island","Ernakulam","Faridabad","Gaya","Gangtok","Ghaziabad","Gurgaon","Guwahati","Gwalior","Haridwar","Hyderabad","Imphal","Indore","Jabalpur","Jaipur","Jaisalmer","Jalandhar","Jamshedpur","Jodhpur","Junagadh","Kanpur","Kanyakumari","Khajuraho","Khandala","Kochi","Kodaikanal","Kolkata","Kota","Kottayam","Kovalam","Lucknow","Ludhiana","Madurai","Manali","Mangalore","Margao","Mathura","Mountabu","Mumbai","Mussoorie","Mysore","Manali","Nagpur","Nainital","Noida","Ooty","Orchha","Panaji","Patna","Pondicherry","Porbandar","Portblair","Pune","Puri","Pushkar","Rajkot","Rameswaram","Ranchi","Sanchi","Secunderabad","Shimla","Surat","Thanjavur","Thiruchchirapalli","Thrissur","Tirumala","Udaipur","Vadodra","Varanasi","Vasco-Da-Gama","Vijayawada","Visakhapatnam"]
let ugs=["BTech","Diploma","BSc","BCom","BA","BArch","BBA","BDes","BEd","BElEd","BPEd","BPharma","BUMS","BAMS","BCA","BDS","BFA","BHM","BHMS","BVSC","LLB","MBBS","Other Graduate"]
let pgs=["CA","CS","DM","ICWA","integrateg-PG","LLM","MA","MArch","MCh","MCom","MDes","MEd","MPharma","MDS","MFA","Medical-MS","MVSC","PG-Diploma","Other"]
let keywordarray=["teacher","school teacher","college teacher","physics","chemistry",""]
var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
let i=0;
let j=0;
let k=0;
let l=0;
let m=0;
let n=0;
let open=0;

function salarycalculator(){
    var minannualsalary=$('#min-annual-salary')
    var maxannualsalary=$('#max-annual-salary') 
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
}
function showselectedlocations(jui){

    var value=jui.val();

    var check=jui.prop('checked')
if(check){

    j++;
let selectedlocations=$('#selected-locations')
selectedlocations.css('display','block');

selectedlocations.append(`
<div class="m-1 " style="display:inline-block">
<span class="" id="${value}" style="background-color:gray;padding:4px;">
${value}
<span>
</div>
 `)}
 else{
    $(`#${value}`).remove();
    j--;  
    if(j===0){
let selectedlocations=$('#selected-locations')
        selectedlocations.append('')
        selectedlocations.css('display','none');
    }
    
 }

}


function showug(ugtemp){
 
    var valueug=ugtemp.val();
    console.log(valueug)
    
 var checkug=ugtemp.prop('checked')
if(checkug){

    l++;
let selectedug=$('#selected-ug')
selectedug.css('display','block');

selectedug.append(`
<div class="m-1 " style="display:block">
<span  id="${valueug}" style="padding:4px;">
${valueug}
<span>
</div>
 `)}
 else{
     
    $(`#${valueug}`).remove();
    l--;  
    if(l===0){
let selectedug=$('#selected-ug')
        selectedug.append('')
        selectedug.css('display','none');
    }
    
 }

}


function showpg(pgtemp){
 
    var valuepg=pgtemp.val();
    console.log(valuepg)
    
 var checkpg=pgtemp.prop('checked')
if(checkpg){

    m++;
let selectedpg=$('#selected-pg')
selectedpg.css('display','block');

selectedpg.append(`


<span  id="${valuepg}" style="padding:4px;display:block">
${valuepg}
</span>

 `)}
 else{
     
    $(`#${valuepg}`).remove();
    m--;  
    if(m===0){
let selectedpg=$('#selected-pg')
        selectedpg.append('')
        selectedpg.css('display','none');
    }
    
 }

}


$(()=>{
    var key;
    var rupee_or_dollar='Dollar'

    var morecompanydetails=$('.more-company-details')
    var selectedlocations=$('#selected-locations')
    var selectedug=$('#selected-ug')
    var selectedpg=$('#selected-pg')
    var minimumyear=$('#minimum-year')
    var maximumyear=$('#maximum-year')
    var rsordollar=$('#rs-or-dollar')
    var minannualsalary=$('#min-annual-salary')
    var maxannualsalary=$('#max-annual-salary') 
    var locationlist=$('#location-list')
    var uglist=$('#ug-list')
    var pglist=$('#pg-list')
    var submit_button=$('#submit-button')
    var location=$('#location')
    var employment_details=$('.employment-details')
    var job_description=$('#job-description')
    var keywords=$('#keywords')
    var job_title=$('#job-title')
    var removeall=$('#remove-all-location')
    var removeallug=$('#remove-all-ug')
    var removeallpg=$('#remove-all-pg')
    // var locationlistlabel=document.getElementsByClassName('.location-list-label')
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

    

// if(rsordollar.val()==='US $')

rsordollar.click(()=>{
if(rsordollar.val()==='Rs'){    
    console.log(rsordollar.val());
    maxannualsalary.children().remove()
    maxannualsalary.append(`<option>Max Annual Salary</option>`)
    minannualsalary.children().remove()
    minannualsalary.append(`<option>Min Annual Salary</option>`)
    salarycalculator()
    return }
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

    if(rsordollar.val()==='Rs'){rupee_or_dollar='INR'}
  
$.post('/api',{
      Job_Title:job_title.val(),
      Job_Description:job_description.val(),
      keywords:keywords.val(),
      minimum:minimumyear.val(),
      maximum:maximumyear.val(),
      min_salary:minannualsalary.val(),
      max_salary:maxannualsalary.val(),
      location:location.val(),
      employment_type:$('.employment-details-one>input:checked').val(),
      job_type:$('.employment-details-two>input:checked').val(),
      recruiter_name:$('#recruiter-name').val(),
      company_name:$('#company-name').val(),
      address:$('#address').val(),
      company_details:$('#company-details').val(),
      salary_type:rupee_or_dollar,
      industry:$('#industry').val(),
      role:$('#role').val(),
      email_address:$('#email-id').val(),    
      more_salary_details:$('#more-salary-details').val(),
      functional_area:$('#functional-area').val()
      ,telephone:$('#telephone').val(),
      website:$('#website').val()
     })
   })

   
$('.low-icon-location').click(function(){
    event.stopPropagation();
uglist.css('display','none');
pglist.css('display','none'); 
if(i%2===0){
    locationlist.css('display','block')
    for(place of places){    
    locationlist.append(`
    <label ><input class="location-list-label"  value="${place}" type="checkbox" onclick="showselectedlocations($(this))" >${place}</label><br>
    `)
    }
 }
 else{
    locationlist.css('display','none')
 }
i++
})

$('.low-icon-ug').click(function(){
    event.stopPropagation();
    
locationlist.css('display','none');
pglist.css('display','none');
 if(k%2===0){
uglist.css('display','block')
    for(ug of ugs){    
    uglist.append(`
    <label ><input class="ug-list-label"  value="${ug}" type="checkbox" onclick="showug($(this))" >${ug}</label><br>
    `)
    }
 }
 else{
uglist.css('display','none')
 }
k++
})


$('.low-icon-pg').click(function(){
    event.stopPropagation();
    
locationlist.css('display','none');
uglist.css('display','none');
 if(n%2===0){
pglist.css('display','block')
    for(pg of pgs){    
    pglist.append(`
    <label ><input class="pg-list-label"  value="${pg}" type="checkbox" onclick="showpg($(this))" >${pg}</label><br>
    `)
    }
 }
 else{
pglist.css('display','none')
 }
n++
})


removeall.click(()=>{

    $('#selected-locations').find('span').remove()
    selectedlocations.css('display','none');   
    for(pl of places ){
    $('.location-list-label').prop("checked",false)
    }
})

removeallug.click(()=>{

    $('#selected-ug').find('span').remove()
    selectedug.css('display','none');    
    for(u of ugs ){
        $('.ug-list-label').prop("checked",false)
        }
})

removeallpg.click(()=>{

    $('#selected-pg').find('span').remove()
    selectedpg.css('display','none');    
    for(p of pgs ){
        $('.pg-list-label').prop("checked",false)
        }
})

$('body').click(()=>{
  
    locationlist.css('display','none');
    uglist.css('display','none');
    pglist.css('display','none')
})
locationlist.click((event)=>{
    event.stopPropagation(),
locationlist.css('display','block'),
uglist.css('display','none');
pglist.css('display','none');
 })
 uglist.click((event)=>{
    event.stopPropagation(),
uglist.css('display','block'),
locationlist.css('display','none');
pglist.css('display','none');
 })

 pglist.click((event)=>{
    event.stopPropagation(),
pglist.css('display','block'),
locationlist.css('display','none');
uglist.css('display','none');

 })
//  $('.low-icon-location').click((event)=>{
//     event.stopPropagation(),
// locationlist.css('display','block'),
// uglist.css('display','none');
//  })

//  $('.low-icon-ug').click((event)=>{
//     event.stopPropagation(),
// uglist.css('display','block'),
// locationlist.css('display','none');
//  })

$('#more-company').click(()=>{
    $('#plus-minus-image').children().css('display','none')
    if(open%2===0){    
$('#plus-minus-image').append(`
<img style="margin-bottom: 2px;" src="http://icons.iconarchive.com/icons/icons8/android/512/Very-Basic-Minus-icon.png" height="15">
`)    
    morecompanydetails.css('display','block')

}
else{
    
$('#plus-minus-image').append(`

<img style="margin-bottom: 2px;" src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/plus-big-512.png" height="15">
`)    
    morecompanydetails.css('display','none')
}
open++
})



$('#change').click(()=>{
    $('#change').parent().remove()
    $('.employment-details').css('display','block')
})


$('#keywords').autocomplete({
    source: availableTags,
  
      
      select: function (suggestion) {
    key=suggestion.value;
    }
})
salarycalculator()

})
