module.exports = async (bot) => {
  console.info('Ready for playing.');
  async function changing() {
    const status = [
      `${await bot.getChats().length} chats.`,
      `${await bot.getContacts().length} contacts.`
    ];
    
    bot.setStatus(status[Math.floor(Math.random() * status.length)]);
    bot.setDisplayName('Bot WhatsApp');
  }
  setInterval(changing, 5000);
};
