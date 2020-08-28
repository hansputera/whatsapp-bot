module.exports = async (bot, group) => {
  const inviter = group.getContact().name + ' / ' + group.getContact().number;
  
  group.getChat().sendMessage(`Hi ${inviter}, someone add me to this group. I hope you're happy with me.`);
};
