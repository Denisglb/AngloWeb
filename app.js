const express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/', function (req, res)
{
    res.render('why.html');
});

app.get('/', (req, res) => {
	res.render('home.html')
})

// /bad - send back Json with Error Message

app.listen(3000), () => {
	console.log('server is up and running on port 3000')
};
