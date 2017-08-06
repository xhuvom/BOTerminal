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
            convo.say('I do not know your name yet!');
            convo.ask('What should I call you?', function(response, convo) {
 
              const confirm = bp.messenger.createText(convo.context.user, 'You want me to call you: ' + response.text + '?', {
                quick_replies: [{
                    payload: 'BP_YES',
                    title: 'Yes',
                    content_type: 'text'
                  },
                  {
                    payload: 'BP_NO',
                    title: 'No',
                    content_type: 'text'
                  }
                ],
                typing: true
              })
 
              convo.ask(confirm, [{
                pattern: 'yes',
                callback: function(response, convo) {
                  // since no further messages are queued after this, 
                  // the conversation will end naturally with status == 'completed' 
                  convo.next();
                }
              }, {
                pattern: 'no|quick_reply::BP_NO',
                callback: function(response, convo) {
                  // stop the conversation. this will cause it to end with status == 'stopped' 
                  convo.stop();
                }
              }, {
                default: true,
                callback: function(response, convo) {
                  convo.repeat();
                  convo.next();
                }
              }]);
 
              convo.next();
 
            }, {
              'key': 'nickname'
            });
 
 
 
            convo.on('end', function(convo) {
              if (convo.status == 'completed') {
                bot.reply(message, 'OK! I will update my dossier...');
 
                controller.storage.users.get(message.user, function(err, user) {
                  if (!user || !user.id) {
                    user = {
                      id: message.user,
                    };
                  }
                  user.name = convo.extractResponse('nickname');
                  controller.storage.users.save(user, function(err, id) {
                    bot.reply(message, 'Got it. I will call you ' + user.name + ' from now on.');
                  });
                });
 
 
 
              } else {
                // this happens if the conversation ended prematurely for some reason 
                bot.reply(message, 'OK, nevermind!');
              }
            });
          }
        });
      }
    });
  });
 
  bp.middlewares.load()
}
