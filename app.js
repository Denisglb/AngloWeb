const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res)
{
    res.sendFile(path.join(__dirname+'/views/home.html'))
});


app.listen(process.env.PORT || 3000)
