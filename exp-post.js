var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage


// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
	re.write("fuck");
   res.send('Hello POST');
})


var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
