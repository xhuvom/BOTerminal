const BotpressBot = require('botpress-botkit').BotpressBot
 
module.exports = function(bp) {
 
  var controller = BotpressBot(bp, {})
  var bot = controller.spawn()
  controller.startTicking()
 
  controller.hears(['what is my name', 'who am i'], 'message_received', function(bot, message) {
 
    controller.storage.users.get(message.user, function(err, user) {
      if (user && user.name) {
        bot.reply(message, 'Your name is ' + user.name);
      } else {
        bot.startConversation(message, function(err, convo) {
          if (!err) {
            convo.say('Hello there!');
            convo.ask('Whats your business?', function(response, convo) {
 
              const confirm = bp.messenger.createText(convo.context.user, 'So  ' + response.text + '?', {
               
                typing: true
              })
 
              
 
              convo.next();
 
           
 
 
 
        
                });
 
 
 
              } else {
                // this happens if the conversation ended prematurely for some reason 
                bot.reply(message, 'OK, nevermind!');
              }
            });
         
        });
      });
    });
  });
 
  bp.middlewares.load()
}
