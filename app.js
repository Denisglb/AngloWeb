const express = require('express');
const fs = require('fs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));



app.get('/', (req, res) => {
	fs.readFile('/views/home.html',null, function(error, data){
		if (error) {
			response.writeHead(404);
			response.write('File not Found');

		} else {
			response.write(data);
		}
		response.end();
	});
	response.end();
})

// /bad - send back Json with Error Message

app.listen(3000), () => {
	console.log('server is up and running on port 3000')
};
