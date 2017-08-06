var exec = require('child_process').exec;
var StringDecoder = require('string_decoder').StringDecoder;
var request = require("request");
const BotpressBot = require('botpress-botkit').BotpressBot

module.exports = function(bp) {
 
var controller = BotpressBot(bp, {})
  var bot = controller.spawn()
  controller.startTicking()
 bp.middlewares.load()


  bp.hear(/hello/i, event => { // Capture messages that are 'hello'

	request("http://127.0.0.1:5002",function(error,response,body)
	{
		console.log(body);
	

 const first_name = event.user.first_name
    bp.messenger.sendText(event.user.id, 'Hello, ' + response.text.toString(), { typing: true }) // Respond to the user with 'Hello, human!'
 
 })
});
}


