 
var exec = require('child_process').exec;
var StringDecoder = require('string_decoder').StringDecoder;

const child = exec('th sample.lua cv/lstm_seeam_msg.t7 -gpuid 0 -temperature 0.3',
    (error, stdout, stderr) => {
        
        console.log(stdout.toString());
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }

});

