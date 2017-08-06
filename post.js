var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/json" }
};
 
client.post("http://127.0.0.1:5002", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});
