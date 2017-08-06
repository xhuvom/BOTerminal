// Example of sending to Lua code and receiving results:
// E. Culurciello, November 2014

// server and socket test:
// http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {
    
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {
        
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('You said "' + data + '"');
        
    });
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
    
}).listen(PORT, HOST);
var spawn = require('child_process').spawn;

// Spawn a Lua process / script:
var process = spawn('th', ['sample.lua', 'cv/lstm_seeam_msg.t7','-gpuid 0']);
console.log('Server listening on ' + HOST +':'+ process);

// create client / Spawn:

