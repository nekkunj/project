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
            `SELECT * FROM recruiter_details`,
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
    ,max_salary,location,employment_type,job_type)
{
  
    
    return new Promise((resolve, reject)=>{
        connection.query(
            `INSERT INTO recruiter_details (Job_Title,Job_Description,Keywords,minimum,maximum) 
            VALUES (?,?,?,?,?)`,
            [Job_Title,Job_Description,keywords,minimum,maximum],
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