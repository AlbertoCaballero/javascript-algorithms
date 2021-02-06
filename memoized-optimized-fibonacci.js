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

for (var i = 0; i < 50; i++) console.log(memoizedFibonacciInstance(i));

