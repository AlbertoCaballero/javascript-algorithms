
function fibonacci(n) {
  if (n <= 1) return n;
  return (fibonacci(n-1) + fibonacci(n-2))
}

function memoizedFibonacci() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = fibonacci(n);
      return cache[n];
    }
  }
}

let memoizedFibonacciInstance = memoizedFibonacci();

// Performs calculation
console.log(memoizedFibonacciInstance(25));

// Performs calculation
console.log(memoizedFibonacciInstance(15));

// Returns cached value
console.log(memoizedFibonacciInstance(25));
console.log(memoizedFibonacciInstance(15));
console.log(memoizedFibonacciInstance(25));
console.log(memoizedFibonacciInstance(15));

