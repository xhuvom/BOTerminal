var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way 
client.get("http://127.0.0.1:5002", function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});
