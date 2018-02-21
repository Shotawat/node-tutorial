const express = require('express')
const app = express()
const path = require('path')

//app.get('/', (req, res) => res.send('Hello World! Version 1.4'))
app.get('/Sho', (req, res) => res.send('Hello Sho in the World of Node-js and Docker!!!!'))
app.get('/Yod', (req, res) => res.send('Hello Yod!!!!'))
app.get('/Yo', (req, res) => res.send('Hello Yo!!!!'))
app.get('/Sho/1', (req, res) => res.send('Hello Sho Yeahhh!!!!'))


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

app.listen(3310     , () => console.log('Example app listening on port 3310!!'))


/*var express = require("express");
var app     = express();
var path    = require("path");*/

//app.listen(8080);