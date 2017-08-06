const exec = require('child_process').exec;
var StringDecoder = require('string_decoder').StringDecoder;
const child = exec('node -v',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);

        console.log(stdout.toString());
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }

});



