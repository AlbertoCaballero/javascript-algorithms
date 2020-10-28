
factorial = (n) => {
  if (n < 0) return 0;
  if (n > 1) return n*factorial(n-1);
  return 1;
};

function fact (n) {
  if (n < 0) return 0;
  if (n > 1) return n*factorial(n-1);
  return 1;
}

console.log(factorial(15));

// Hoisted variable
console.log('Function output:', helo('Alien'));
// Named function
console.log('Function name:', helo.name);
// Type of function
console.log('Type:', typeof helo);
console.log(helo.testlet);

function helo(name) {
  let testlet = 56;
  return `Helo ${name}`;
}

console.log(helo.testlet);


(function (n) {
  console.log(n);
})(5);


