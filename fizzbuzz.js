numbers = [...Array(100).keys()];

function fizzbuzz (n) {
  if (n % 3 === 0) {
    if (n % 5 === 0){
      return 'FizzBuzz';
    } else {
      return 'Fizz';
    }
  }
  if (n % 5 === 0) return 'Buzz';
  return n;
}

for (n in numbers) {
  console.log(n, fizzbuzz(n));
}

