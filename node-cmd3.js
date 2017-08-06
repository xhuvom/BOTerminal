var http = require('http');
var exec = require('child_process').exec;
var StringDecoder = require('string_decoder').StringDecoder;


  const child = exec('th sample.lua cv/lstm_seeam_msg.t7 -gpuid 0 -temperature 0.3',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);

        console.log(stdout.toString());
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }

  http.createServer(function (request, response) {
      response.writeHead(200, {
         'Content-Type': 'text/plain'
      });
      response.write(stdout.toString())
      response.end();
}).listen(5002);
});




// Tested OK
