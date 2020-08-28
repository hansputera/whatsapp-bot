module.exports = {
  help: {
    name: 'ping',
    description: 'Ping pong!'
  },
  conf: {
    aliases: []
  },
  run: async (bot, message, args) => {
    await message.reply('Pong!');
  }
};
