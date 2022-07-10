const mysql = require ('mysql');
const dotenv = require ('dotenv');
const { request } = require('express');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME,
    port: process.env.DB_PORT
});

connection.connect(err => {
        if(err){
            console.log(err.message);
        }
        console.log('db ' + connection.state);
    });

    class dbConnection{
        static getDbServiceInstance(){
            return instance ? instance : new dbConnection();
        }

        async getAllData(){
            try {
                const response = await new Promise ((resolve, reject) =>{
                    const sql = "SELECT * FROM jobify.jobdetail;";

                    connection.query(sql, (err, results) =>{
                        if(err) throw err;
                        else resolve(results);
                    });
                });
                return response;

            } catch (error) {
                
                console.log(error);
            }
        }

        async insertNewJob(company, role, job_description, salary, jobType, location, category, jobLink){

            try {
                const date_added = new Date();
                const insertID = await new Promise ((resolve, reject) =>{
                    const sql = "INSERT INTO jobify.jobdetail (companyName, role, jobDescription, salary, jobType, location, category, link, dateAdded) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
                    connection.query(sql, [company, role, job_description, salary, jobType, location, category, jobLink, date_added], (err, results) =>{
                        if(err) throw err;
                        else resolve(results.insertId);
                        });
         });

                console.log(insertID);
                // return response(); 
            } catch (error) {
                console.log(error);
            }
        }

        //async function to filter job based on checkbox
        async filterJobByfulltime(){
            try {
                const response = await new Promise ((resolve, reject) =>{
                    
                    const sql = "SELECT * FROM jobify.jobdetail WHERE jobType = 'Full Time';";

                    connection.query(sql, (err, results) =>{
                        if(err) throw err;
                        else resolve(results);
                    });
                });
                return response;

            } catch (error) {
                console.log(error);
                
            }
        }

        async filterJobByparttime(){
            try {
                const response = await new Promise ((resolve, reject) =>{
                    
                    const sql = "SELECT * FROM jobify.jobdetail WHERE jobType = 'Part Time';";

                    connection.query(sql, (err, results) =>{
                        if(err) throw err;
                        else resolve(results);
                    });
                });
                return response;

            } catch (error) {
                console.log(error);
                
            }
        }

        async filterJobByContract(){
            try {
                const response = await new Promise ((resolve, reject) =>{
                    
                    const sql = "SELECT * FROM jobify.jobdetail WHERE jobType = 'Contract';";

                    connection.query(sql, (err, results) =>{
                        if(err) throw err;
                        else resolve(results);
                    });
                });
                return response;

            } catch (error) {
                console.log(error);
                
            }
        }

        async filterJobByInternship(){
            try {
                const response = await new Promise ((resolve, reject) =>{
                    
                    const sql = "SELECT * FROM jobify.jobdetail WHERE jobType = 'Internship';";

                    connection.query(sql, (err, results) =>{
                        if(err) throw err;
                        else resolve(results);
                    });
                });
                return response;

            } catch (error) {
                console.log(error);
                
            }
        }

        async filterJobByVolunteer(){
            try {
                const response = await new Promise ((resolve, reject) =>{
                    
                    const sql = "SELECT * FROM jobify.jobdetail WHERE jobType = 'Volunteer';";

                    connection.query(sql, (err, results) =>{
                        if(err) throw err;
                        else resolve(results);
                    });
                });
                return response;

            } catch (error) {
                console.log(error);
                
            }
        }

        async filterJobByRecentlyListed(){
            //filter job by descending order
            try {
                const response = await new Promise ((resolve, reject) =>{
                    
                    const sql = "SELECT * FROM jobify.jobdetail ORDER BY dateAdded DESC;";

                    connection.query(sql, (err, results) =>{
                        if(err) throw err;
                        else resolve(results);
                    });
                });
                return response;

            } catch (error) {
                console.log(error);   
            }
        }

        async filterJobByOldest(){
            try{
            const response = await new Promise ((resolve, reject) =>{
                        const sql = "SELECT * FROM jobify.jobdetail ORDER BY dateAdded ASC;";
    
                        connection.query(sql, (err, results) =>{
                            if(err) throw err;
                            else resolve(results);
                        });
                    });
                    return response;

                } catch (error) {
                    console.log(error);   
        }
    }

        async filterJobByHighestPay(){
            try{
            const response = await new Promise ((resolve, reject) =>{
                        
                        const sql = "SELECT * FROM jobify.jobdetail ORDER BY salary DESC;";
    
                        connection.query(sql, (err, results) =>{
                            if(err) throw err;
                            else resolve(results);
                        });
                    });
                    return response;

                } catch (error) {
                    console.log(error);   
        }
    }

        async filterJobByLowestPay(){
            try{
            const response = await new Promise ((resolve, reject) => {

                const sql = "SELECT * FROM jobify.jobdetail ORDER BY salary ASC;";

                connection.query(sql, (err, results) => {
                    if(err) throw err;
                    else resolve(results);
                });
            });
                return response;

            } catch (error){
                console.log(error);
            }
        }
    }
    
    module.exports = dbConnection;