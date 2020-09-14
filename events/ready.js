module.exports = async (bot) => {
  console.info('Ready for playing.');
  const chats = await bot.getChats();
  const contacts = await bot.getContacts();
  function changing() {
    const status = [
      `${chats.length} chats.`,
      `${contacts.length} contacts.`
    ];
    
    bot.setStatus(status[Math.floor(Math.random() * status.length)]);
    bot.setDisplayName('Bot WhatsApp');
  }
  setInterval(changing, 5000);
};
