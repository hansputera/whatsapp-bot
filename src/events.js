const { readdirSync } = require('fs');

module.exports = bot => {
  const events = readdirSync('./events/');
  for (const event of events) {
    const file = require(`../events/${event}`);
    
    bot.on(event.split('.')[0], (...args) => file(bot, ...args));
  }
};
