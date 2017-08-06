var exec = require('child_process').exec;
var StringDecoder = require('string_decoder').StringDecoder;
var child = exec('node -v', (e, stdout, stderr)=> {

    if (e instanceof Error) {

        console.error(e);

        throw e;

    }


child.stdout.on('data', function(data) {

var decoder = new StringDecoder('utf8');

var textChunk = decoder.write(data);

   console.log(data.toString()); 

});

});
