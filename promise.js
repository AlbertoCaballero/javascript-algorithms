// Simple promise
const greeting = new Promise((resolve, reject) => {
  try {
    console.log('Inside promise, eager!');
    resolve('Welcome!');
  } catch(e) {
    console.log(`Broken promise: ${e.error}`);
  }
});

console.log('Before calling then on promise');
greeting.then(res => console.log(`Greeting from promise: ${res}`));

