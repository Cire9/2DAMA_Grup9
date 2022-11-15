const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
;

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

app.post ("/login", (req, res)=> {
    console.log(req.body);
    console.log('I got a request!');
    const data = req.body;
    res.json({
        usuari: data.usuari,
        passw: data.password
    })
    /*let str = JSON.stringify(config);

    res.send(str);*/
});

app.listen(PORT, ()=>{
    console.log("SERVER RUNNING ["+PORT+"]");
});
