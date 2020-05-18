var sql = require("mssql");

const config = {
    user: 'chatbot',
    password: 'celebal@123',
    server: 'cterpdbserver.database.windows.net',
    database: 'erpdb',
    encrypt: true,
    requestTimeout: 1500000
};

sql.connect(config, function (err) {
    if (err) {
        console.log("Error in database connectivity. Trying again" + err);
    } else {
        console.log("database connected.")
    }
});

exports.login = (email) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('email', sql.VarChar(500), email)
    request.execute('login', function (err, recordset) {
        if (err) {
            console.log("Error in fetching login details.", err);
            reject();
        }
        else {
            resolve(recordset);
        }
    });

})

exports.managementFeesDetail = (type) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('type', sql.VarChar(500), type)
    request.execute('uspManagementFeesDetail', function (err, recordset) {
        if (err) {
            console.log("Error in fetching management fees details.", err);
            reject();
        }
        else {
            resolve(recordset);
        }
    });

})

exports.studentMainDetail = (enrollmentId, type) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('rollNo', sql.VarChar(30), enrollmentId)//2018PUSSHBSAX06587
    request.input('type', sql.VarChar(100), type)// student or parent
    request.execute('sp_studentMainCard', function (err, recordset) {
        if (err) {
            console.log("Error in fetching student main details.", err);
            reject();
        }
        else {
            resolve(recordset);
        }
    });

})

exports.studentAssignmentDetail = (enrollmentId) => new Promise((resolve, reject) => {


    var request = new sql.Request();
    request.input('rollNo', sql.VarChar(30), enrollmentId)//2018PUSSHBSAX06587
    request.execute('sp_assignmentDeatils', function (err, recordset) {
        if (err) {
            console.log("Error in fetching student assignment details.", err);
            reject();
        }
        else {
            resolve(recordset);
        }
    });

})

exports.studenFeesDetail = (enrollmentId) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('rollNo', sql.VarChar(30), enrollmentId)//2018PUSSHBSAX06587
    request.execute('sp_studentFeesDetails', function (err, recordset) {
        if (err) {
            console.log("Error in fetching student fees details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

exports.studentMarksDetail = (enrollmentId) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('rollNo', sql.VarChar(30), enrollmentId)//2018PUSSHBSAX06587
    request.execute('sp_studentMarksDetails', function (err, recordset) {
        if (err) {
            console.log("Error in fetching student marks details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

exports.studentAttendanceDetail = (enrollmentId) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('rollNo', sql.VarChar(30), enrollmentId)//2018PUSSHBSAX06587
    request.execute('sp_studentAttendanceDetails', function (err, recordset) {
        if (err) {
            console.log("Error in fetching student attendance details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

exports.facultyMainDetail = (facultyId) => new Promise((resolve, reject) => {


    var request = new sql.Request();
    request.input('facultyId', sql.VarChar(30), facultyId)//1
    request.execute('sp_facultyMain', function (err, recordset) {
        if (err) {
            console.log("Error in fetching faculty main details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

exports.facultySalaryDetail = (facultyId) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('facultyId', sql.VarChar(30), facultyId)//1
    request.execute('sp_netSalaryCard', function (err, recordset) {
        if (err) {
            console.log("Error in fetching faculty salary details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

exports.facultyLeaveDetail = (facultyId) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('facultyId', sql.VarChar(30), facultyId)//1
    request.execute('sp_leaveDetails', function (err, recordset) {
        if (err) {
            console.log("Error in fetching faculty leave details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

exports.facultyClassDetail = (facultyId) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('facultyId', sql.VarChar(30), facultyId)//1
    request.execute('sp_classPerWeek', function (err, recordset) {
        if (err) {
            console.log("Error in fetching faculty class details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})
// function name
// parameter

exports.averageAttendance = (id, type) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('id', sql.Int(30), id)//1
    request.input('type', sql.VarChar(30), type)//1 konsa type h average  college
    request.execute('sp_avergaeAttendance', function (err, recordset) {
        if (err) {
            console.log("Error in fetching faculty class details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})


exports.feeDetail = (id, type) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('id', sql.Int(30), id)//1
    request.input('type', sql.VarChar(30), type)//1 konsa type h average  college
    request.execute('fee_details', function (err, recordset) {
        if (err) {
            console.log("Error in fetching faculty class details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

exports.averageMarks = (id, type) => new Promise((resolve, reject) => {

    var request = new sql.Request();
    request.input('id', sql.Int(30), id)//1
    request.input('type', sql.VarChar(30), type)//1
    request.execute('sp_avergaeMarks', function (err, recordset) {
        if (err) {
            console.log("Error in fetching faculty class details.", err);
            reject();
        }
        else {
         //console.log(recordset);
            resolve(recordset);
        }
    });

})

