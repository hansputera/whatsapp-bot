module.exports = async (bot, batterInfo) => {
  console.info('Phone has change battery!');
  console.info('Plugged: ' + batterInfo.plugged ? 'Yes' : 'Nope' + '\nCurrent Battery: ' + batterInfo.battery + '%');
};
