const express = require("express");
const cors = require("cors");


const authController = require('../Server/Controllers/authControllers')

const app = express();
const PORT = 3000;

var bodyParser = require("body-parser");



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

app.set('view engine', '.html')

app.use(bodyParser.urlencoded({ extended: true}));

app.post ("/login", authController.login);

app.post ("/register", authController.register);

authController.register

app.listen(PORT, ()=>{
    console.log("SERVER RUNNING ["+PORT+"]");
});
