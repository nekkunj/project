const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    database:'user',
    user:'root',
    password:'kvsector3'
})
function finduserdetails(usern){
    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM userdetails WHERE username=(?)`,
            [usern],
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
function getuserdetails () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM userdetails`,
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

function adduserdetails(username,email,password)
{
  
    
    return new Promise((resolve, reject)=>{
        connection.query(
            `INSERT INTO userdetails (username,email,password) 
            VALUES (?,?,?)`,
            [username,email,password],
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

function gettitle () {

    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM title`,
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


function addtitle(Job_Title){

    
    
    return new Promise((resolve, reject)=>{
    
        connection.query(
            `DELETE FROM title 
             `,
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    
        connection.query(
            `INSERT INTO title (Job_Title) 
            VALUES (?)`,
            [Job_Title],
            function(err,rows,cols) {
                if (err) {
                    reject(err)
                } else {                    
                    resolve()
                }
            }
        )
    });


}
// function deletetitle(){
//     return new Promise(function (resolve, reject) {
//         connection.query(
//             `DELETE FROM title 
//              `,
//             function(err, rows, cols) {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve()
//                 }
//             }
//         )
//     })
// }


exports=module.exports={
    adduserdetails,getuserdetails,gettitle,addtitle,finduserdetails
}

