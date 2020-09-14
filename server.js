const WA = require('./src/Client');
const fs = require('fs');
const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}
const run = new WA({
  puppeteer: {
    headless: false
  },
  session: sessionCfg
});

run.build();
