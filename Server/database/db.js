const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "labs.inspedralbes.cat",
    database: "a21xavcabmil_proyecto",
    user: "a21xavcabmil_user",
    password: "Pedralbes22_23"
})

connection.connect(function(error){
    if (error){
        throw error;
    }
    else{
        console.log('MySQL Database is connected Succesfully');
    }
});

module.exports = connection