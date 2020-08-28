const PREFIX = require('../config.json').PREFIX;

module.exports = async (bot, message) => {
  const args = message.body.slice(PREFIX.length).trim().split(/ +/g); // ''
  const cmd = args.shift().toLowerCase();
  
  const commands = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
  commands.run(bot, message, args);
  if (!commands) return;
}
