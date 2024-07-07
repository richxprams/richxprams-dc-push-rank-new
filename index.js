const BotDiscord = require('dc-push-rank-new');

const addresses = ['0xAddress1', '0xAddress2'];
const amounts = [10, 20];

BotDiscord.sendTokens(addresses, amounts)
  .then(result => {
    console.log('Tokens sent successfully:', result);
  })
  .catch(error => {
    console.error('Error sending tokens:', error);
  });
