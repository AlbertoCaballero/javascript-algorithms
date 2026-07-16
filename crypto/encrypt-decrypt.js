const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');

const message = 'Hello World!';
const key = randomBytes(32);
const initialVector = randomBytes(16);

const cipher = createCipheriv('aes256', key, initialVector);
const decipher = createDecipheriv('aes256', key, initialVector);

// Encrypt
const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');

// Decrypt
const decryptedMessage = decipher.update(encryptedMessage, 'utf8', 'hex') + decipher.final('hex');

console.log('Message: ', message);
console.log('Encrypted: ', encryptedMessage);
console.log('Decrypted: ', decryptedMessage);
