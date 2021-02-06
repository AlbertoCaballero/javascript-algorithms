const fibonacci = (n , mem = {}) => {
  if (n in mem) return mem[n];
  if (n <= 2) return 1;
  mem [n] = fibonacci(n-1, mem) + fibonacci(n-2, mem);
  return mem[n];
};

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
console.log(memoizedFibonacciInstance(50));

// Calculate
console.log(memoizedFibonacciInstance(100));

