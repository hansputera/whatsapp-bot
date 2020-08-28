const kata = [
  'Maybe.',
  'Nope.',
  'Oh.',
  'Thanks.',
  'That\'s funny!'
]

module.exports = {
  help: {
    name: 'tanya',
    description: 'Ask about something to bot\'s'
  },
  conf: {
    aliases: ['ask']
  },
  run: async (bot, message, args) => {
    const req = args.join(' ');
    if (!req) return message.reply('e.g **w!tanya (question)** don\'t include ()');
    
    await message.reply(kata[Math.floor(Math.random() * kata.length)]);
  }
}
