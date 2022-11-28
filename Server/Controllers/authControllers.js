const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const {promisify} = require('util');
const path = require('path')

const conexion = require('../database/db');
const { appendFile } = require('fs');

exports.register = async (req, res) =>{
    try{
        console.log('I got a request!');
        const data = req.body;
        let passHash = await bcryptjs.hash(data.password, 8)

        conexion.query('INSERT INTO Persona SET ?', {nickname: data.nickname, email: data.email, FirstName: data.firstName, LastName: data.lastName, tokenUser: passHash}, (error, results) =>{
            if(error){console.log(error)}
            console.log("Se metio!!")
        })
    }catch (error){
        console.log(error)
    }
};

exports.login = async (req, res) =>{
    /*try{
        const data = req.body;

        if(!data.nickname || !data.password){
            res.render('login')

            })
        }
    }catch (error){

    }*/ 

}