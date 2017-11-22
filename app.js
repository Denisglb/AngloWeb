const express = require('express');
const app = express();

const path = require("path")

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res)
{
    res.sendFile(path.join(__dirname+'/views/home.html'))
});

app.get('/', (req, res) => {
	res.render('home.html')
})

// /bad - send back Json with Error Message

app.listen(3000), () => {
	console.log('server is up and running on port 3000')
};
