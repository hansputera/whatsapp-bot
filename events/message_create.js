const { PREFIX } = require('../config.json');

module.exports = async (bot, message) => {
  if (message.getChat().isGroup) {
    const msg = message.body.toLowerCase();
    
    if (msg.startsWith(PREFIX.toLowerCase())) {
      require('../src/CommandHandler')(bot, message);
    }
  } else {
    if (!message.getContact().isMyContact) return;
    
  }
}
