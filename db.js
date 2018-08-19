const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    database:'recruiter',
    user:'root',
    password:'kvsector3'
})

function getrecruiterdetails () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM recruiter_details order by id desc`,
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    
                    resolve(rows)
                }
            }
        )
    })
}

function addrecruiterdetails(Job_Title,Job_Description,keywords,minimum,maximum,min_salary
    ,max_salary,location,employment_type,job_type,recruiter_name,company_name,address,company_details,salary_type,industry,role,
    email_address,more_salary_details,functional_area,telephone,website)
{  

    return new Promise((resolve, reject)=>{
        connection.query(
            `INSERT INTO recruiter_details(Job_Title,Job_Description,Keywords,minimum,maximum,min_salary,max_salary,employment_type,job_type,recruiter_name,company_name,address,company_details,salary_type,industry,role,email_address,more_salary_details,functional_area,telephone,website) 
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [Job_Title,Job_Description,keywords,minimum,maximum,min_salary,max_salary,employment_type,job_type,recruiter_name,company_name,address,company_details,salary_type,industry,role,email_address,more_salary_details,functional_area,telephone,website],
            function(err,rows,cols) {
                if (err) {
                    reject(err)
                } else {

                    resolve()
                }
            }
        )
    })
}

exports=module.exports={
    getrecruiterdetails,addrecruiterdetails
}