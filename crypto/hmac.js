// Hash-based message authentication code
const { createHmac } = require('crypto');

const key1 = 'key';
const key2 = 'secret-key';
const message = 'message!';

const hmac1 = createHmac('sha256', key1).update(message).digest('hex');
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(message, hmac1, key1);
console.log(message, hmac2, key2);

