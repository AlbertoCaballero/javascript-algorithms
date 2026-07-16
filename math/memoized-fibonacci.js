
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

for (var i = 0; i < 50; i++) console.log(memoizedFibonacciInstance(i));

