var http = require('http');
var StringDecoder = require('string_decoder').StringDecoder;
var exec = require('child_process').exec;

var child = exec('th sample.lua cv/lstm_seeam_msg.t7 -gpuid 0 -primetext "hall e?" ', (e, stdout, stderr)=> {

    if (e instanceof Error) {

        console.error(e);

        throw e;

    }



    console.log('stdout ', stdout);

    console.log('stderr ', stderr);
child.stdout.on('data', function(data) {
var decoder = new StringDecoder('utf8');

var textChunk = decoder.write(data);
  http.createServer(function (request, response) {
      response.writeHead(200, {
         'Content-Type': 'text/plain'
      });
      response.write(textChunk)
      response.end();
}).listen(5002);
});

});

