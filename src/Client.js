const { Client } = require('whatsapp-web.js');
const Enmap = require('enmap');
const fs = require('fs');

module.exports = class WhatsappBot extends Client {
  constructor(opt) {
    super(opt);
    
    this.db = new Enmap({ name: 'db' });
    
  }
  
  build() {
    require('./module')(this);
    require('./events')(this);
    this.initialize();

    
  }
};
