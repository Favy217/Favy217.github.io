const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbConnection = require('./dbConnection.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//create
app.post('/insert', (request, response) => {
    const {company} = request.body;
    const {role} = request.body;
    const {job_description} = request.body;
    //const {role_detail} = request.body;
    const {salary} = request.body;
    const {jobType} = request.body;
    const {location} = request.body;
    const {category} = request.body;
    const {jobLink} = request.body;
    
    const db = dbConnection.getDbServiceInstance();
    const result = db.insertNewJob(company, role, job_description, salary, jobType, location, category, jobLink);

    result
    .then(data => response.json({success: true}))
    .catch(err => console.log(err));
});


//read
app.get('/getAll', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.getAllData();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/fulltime', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByfulltime();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/parttime', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByparttime();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/contract', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByContract();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/internship', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByInternship();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/volunteer', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByVolunteer();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

//filter recently listed
app.get('/recently', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByRecentlyListed();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/oldest', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByOldest();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/highestPay', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByHighestPay();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

app.get('/lowestPay', (request, response) => {
    const db = dbConnection.getDbServiceInstance();

    const result = db.filterJobByLowestPay();
    result.then(data => response.json({data : data})).catch(err => console.log(err));
});

// app.get('companyName', (request, response) => {
//     const db = dbConnection.getDbServiceInstance();

//     const result = db.filterCompany();
//     result.then(data => response.json({data : data})).catch(err => console.log(err));
// });


//update


//delete

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});