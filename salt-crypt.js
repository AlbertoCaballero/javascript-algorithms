const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

var users = [];

const signup = (email, password) => {
  const salt = randomBytes(16).toString('hex');
  const hashedPassword = scryptSync(password, salt, 64);

  const user = { email, password: `${salt}:${hashedPassword}` }

  users.push(user);

  return user;
}

const login = (email, password) => {
  const user = users.find(u => u.email === email);
  const [salt, key] = user.password.split(':');

  const hashedBuffer = scryptSync(password, salt, 64);
  
  const keyBuffer = Buffer.from(key, 'hex');

  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  if (match) {
    return 'Success';
  } else {
    return 'Fail';
  }
}

console.log(signup('Alberto', '123456'));

console.log(login('Alberto', '123456'));

console.log(login('Alberto', 'pass'));
