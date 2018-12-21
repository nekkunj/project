var top_locations=['Mumbai','Gurgaon','Pune','Ahmedabad','Bangalore','NOIDA','Hyderabad','Chandigarh','Delhi','Chennai','Kolkata']
var andra_pradesh_locations=['Adilabad','Anantapur','Cuddapah','Guntakal','Gguntur','Kakinada','Kamalapuram','Kurnool','Nellore','Rajahmundry','Tirupati','Vijayawada','Visakhapatnam'];
var himachal_pradesh_locations=['Baddi','Chamba','Dalhousie','Kala','Kullu','Mandi','Shimla'];
var karnataka_locations=['Belgaum','Bellary','Bengaluru','Bidar','Davangere','Dharwad','Gulbarga','Hospet','Hubli','Kolar','Koppal','Mangalore','Mysore','Shimoga','Tumkur'];
var kerala_locations=['Alleppey','Kochi','idukki','Kannur','KAsargode','Kollam','Calicut','Malappuram','Palakkad','Thrissur','Trivandrum','Wayanad']
var assam_locations=['Dibrugarh','Guwahati','Silchar','Tezpur']
var bihar_locations=['Aurangabad','Bhagalpur','Gaya','Munger','Muzzaffarpur']
var Chattisgarh_locations=['Bhilai','Bilaspur','Korba','Raigarh','Raipur']
var Gujrat_locations=['Ahmedabad','Anand','Ankelshwar','Bharuch','Bhavnagar','Bhuj','Dahej','Ghandhinagar','Gir','Godhra','Jamnagar','Junagadh','Kandla','Porbandar','Rajkot','Surendranagar','Valsad','Vapi']
var huryana_locations=['Ambala','Bawal','Bhiwani','Dharuhera','Faridabad','Gurgaon','Hisar','Jind','Karnal','Kurushetra','Palwal','Panipat','Rewari','Rohtak','Sonepat','Yamunanagar']
var Jharkhand_locations=['Bokaro','Dhanbad','Jamshedpur','Ranchi']
var Madhya_pradesh_locations=['Bhopal','Gwalior','Indore','Jabalpur','Katni','Ratlam','Rewa','Satna','Ujjain']
var maharashtra_locations=['Ahmednagar','Akola','Amravati','Baramati','Chandrapur','Chiplun','Dhule','Jalgaon','Khopoli','Kohlapur','Mumbai','Nagpur','Nasik','Navi Mumbai','Pune','Raigad','Ratangad','Satara','Solapur','Tarapur','Thane','Vasai']
var Odisha_locations=['Angul','Bhubaneshwar','Cuttack','Jharsuguda','Paradeep','Puri','Sambalpur']
var punjab_locations=['Amritsar','Banur','Barnala','Bathinda','Faridkot','Firozpur','Gurdaspur','Hoshiarpur','Jalandhar','KApurthala','Ludhiana','Moga','Mohali','Morinda','Pathankot','Patiala','Phagwara','Rajpura','Rupnagar','Sangrur']
var Rajasthan_locations=['Ajmer','Alwar','Banswara','Bhiwadi','Bikaner','Ganganagar','Jaipur','Jaisalmer','Jodhpur','Kota','Mount Abu','Nagar','Udaipur']
$(()=>{
    for(topa of top_locations){
        $('.top-locations').append(`
        <li value=${topa} style="color:grey" title=${topa}>Jobs in ${topa}</li>
        `)}

    for(andra_pradesh of andra_pradesh_locations){
    $('.Andra-Pradesh').append(`
    <li value=${andra_pradesh} style="color:grey" title=${andra_pradesh}>Jobs in ${andra_pradesh}</li>
    `)}
    for(himachal_pradesh of himachal_pradesh_locations){
        $('.himachal-Pradesh').append(`
        <li value=${himachal_pradesh} style="color:grey" title=${himachal_pradesh}>Jobs in ${himachal_pradesh}</li>
        `)}

        for(karnataka of karnataka_locations){
            $('.karnataka').append(`
            <li value=${karnataka} style="color:grey" title=${karnataka}>Jobs in ${karnataka}</li>
            `)}

            for(kerala of kerala_locations){
                $('.kerala').append(`
                <li value=${kerala} style="color:grey" title=${kerala}>Jobs in ${kerala}</li>
                `)}

                for(assam of assam_locations){
                    $('.assam').append(`
                    <li value=${assam} style="color:grey" title=${assam}>Jobs in ${assam}</li>
                    `)}

                    for(bihar of bihar_locations){
                        $('.bihar').append(`
                        <li value=${bihar} style="color:grey" title=${bihar}>Jobs in ${bihar}</li>
                        `)}

                        for(Chattisgarh of Chattisgarh_locations){
                            $('.Chattisgarh').append(`
                            <li value=${Chattisgarh} style="color:grey" title=${Chattisgarh}>Jobs in ${Chattisgarh}</li>
                            `)}

                            for(Gujrat of Gujrat_locations){
                                $('.Gujrat').append(`
                                <li value=${Gujrat} style="color:grey" title=${Gujrat}>Jobs in ${Gujrat}</li>
                                `)}

                                for(huryana of huryana_locations){
                                    $('.huryana').append(`
                                    <li value=${huryana} style="color:grey" title=${huryana}>Jobs in ${huryana}</li>
                                    `)}

                                    for(Jharkhand of Jharkhand_locations){
                                        $('.Jharkhand').append(`
                                        <li value=${Jharkhand} style="color:grey" title=${Jharkhand}>Jobs in ${Jharkhand}</li>
                                        `)}

                                        for(Madhya_pradesh of Madhya_pradesh_locations){
                                            $('.Madhya_pradesh').append(`
                                            <li value=${Madhya_pradesh} style="color:grey" title=${Madhya_pradesh}>Jobs in ${Madhya_pradesh}</li>
                                            `)}

                                            for(maharashtra of maharashtra_locations){
                                                $('.maharashtra').append(`
                                                <li value=${maharashtra} style="color:grey" title=${maharashtra}>Jobs in ${maharashtra}</li>
                                                `)}
                                                for(Odisha of Odisha_locations){
                                                    $('.Odisha').append(`
                                                    <li value=${Odisha} style="color:grey" title=${Odisha}>Jobs in ${Odisha}</li>
                                                    `)}
                                                    for(punjab of punjab_locations){
                                                        $('.punjab').append(`
                                                        <li value=${punjab} style="color:grey" title=${punjab}>Jobs in ${punjab}</li>
                                                        `)}
                                                        for(Rajasthan of Rajasthan_locations){
                                                            $('.Rajasthan').append(`
                                                            <li value=${Rajasthan} style="color:grey" title=${Rajasthan}>Jobs in ${Rajasthan}</li>
                                                            `)}
                                                            $('.manipur').append(`
                                                            <li value="Imphal" style="color:grey" title="Imphal">Jobs in Imphal</li>
                                                            `)
                                                            $('.mizoram').append(`
                                                            <li value="Aizawl" style="color:grey" title="Aizawl">Jobs in Aizawl</li>
                                                            `)
                                                            $('.meghalya').append(`
                                                            <li value="Shilong" style="color:grey" title="Shilong">Jobs in Shilong</li>
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
                                                                                                       
                                                            
})