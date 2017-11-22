const express = require('express');
const app = express();

const path = require("path")

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res)
{
    res.sendFile(path.join(__dirname+'/views/home.html'))
});

app.get('/', (req, res) => {
	res.render('home.html')
})

// /bad - send back Json with Error Message

app.listen(process.env.PORT || 5000)
