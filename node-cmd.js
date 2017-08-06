var http = require('http');
const exec = require('child_process').exec;
const child = exec('node', ['-v'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  
    console.log(stdout.toString()); 
});

