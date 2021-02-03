// Functions within functions

function first() {
  const name = 'Person';
  function sayHello() {
    console.log(`Hello ${name}`);
  }
  sayHello();
}

first();

function chainSum(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return a + b + c + d;
      }
    }
  }
}

console.log(chainSum(5)(6)(7)(8));

function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function setupHelp() {
  var helpText = [
    {'id': 'email', 'help': 'Your e-mail address'},
    {'id': 'name', 'help': 'Your full name'},
    {'id': 'age', 'help': 'Your age (you must be over 16)'}
  ];

  for (let i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();

