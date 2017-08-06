var sys = require ('sys'),

url = require('url'),

http = require('http'),

qs = require('querystring');

http.createServer(function (req, res) {

    if(req.method=='POST') {

            var body='';

            req.on('data', function (data) {

                body +=data;

            });

            req.on('end',function(){

                var POST =  qs.parse(body);

                console.log(POST);

            });

    }

    else if(req.method=='GET') {

        var url_parts = url.parse(req.url,true);

        console.log(url_parts.query);

    }

}).listen(1337, "127.0.0.1");
