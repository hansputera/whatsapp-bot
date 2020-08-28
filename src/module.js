const { readdir } = require('fs');
const Collection = require('../discordjs/Collection');

module.exports = bot => {
  bot.commands = new Collection();
  bot.helps = new Collection();
  bot.aliases = new Collection();
  
  
  readdir('./commands/', (error, categories) => {
    if (error) {
      console.error(error.stack);
    }
    
    console.log(`Found ${categories.length} category.`);
    categories.forEach(category => {
      let moduleConf = require(`../commands/${category}/module.json`);
      moduleConf.cmds = [];
      bot.helps.set(category, moduleConf);
      readdir(`./commands/${category}/`, (err, files) => {
        if (err) {
          console.error(err.stack);
        }
        
        console.log(`Found ${files.length - 1} commands.`);
        files.forEach(file => {
          if (!file.endsWith('.js')) return;
          let prop = require(`../commands/${category}/${file}`);
          bot.commands.set(prop.help.name, prop);
          prop.conf.aliases.forEach(alias => {
            bot.aliases.set(alias, prop.help.name);
          });
          bot.helps.get(category).cmds.push(prop.help.name);
        });
      });
    });
  });
};
