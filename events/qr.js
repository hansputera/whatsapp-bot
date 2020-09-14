const { generate } = require("qrcode-terminal");
module.exports = async (bot, qr) => {
  const qrX = generate(qr, {
    small: true
  });

  console.log(qrX);
};
