module.exports = async (bot, reason) => {
  const disconnectedTypes = [
    'CONFLICT',
    'DEPRECATED_VERSION',
    'PROXYBLOCK',
    'SMB_TOS_BLOCK',
    'TIMEOUT',
    'TOS_BLOCK',
    'UNLAUNCHED',
    'UNPAIRED',
    'UNPAIRED_IDLE'
  ];
  
  console.warn(`WhatsApp Bot has been disconnected because: ${reason}`);
};
