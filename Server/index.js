const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

var bodyParser = require("body-parser");

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

/*let cors_config = {
    origin: function (origin, callback){
        return callback(null, true);
    }
};

app.use(cors(cors_config));*/

app.use(cors({
    origin: function (origin, callback){

        return callback(null, true);
    }
}));//Es lo mismo que lo que está arriba comentado.

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.post ("/login", (req, res)=> {
    
    console.log('I got a request!');
    const data = req.body;
    /*res.json({
        email: data.email,
        passw: data.password
    })*/
    console.log(req.body);
    connection.query('SELECT * FROM Persona WHERE email = "'+data.email+'" and passw = "'+data.password+'";',
    function (err, result, fields){
        if (err) throw err;
        res.send(result)
        
    });
    /*let str = JSON.stringify(config);

    res.send(str);*/
});

app.listen(PORT, ()=>{
    console.log("SERVER RUNNING ["+PORT+"]");
});
