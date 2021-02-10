const fibonacci = (n, mem = {}) => {
  if (n in mem) return mem[n];
  if (n <= 1) return 1;
  mem[n] = fibonacci(n-1, mem) + fibonacci(n-2, mem);
  return mem[n];
};

function memoizedFibonacci() {
  let cache = {};
  return {
    get: function(n) {
      if (n in cache) return cache[n];
      cache[n] = fibonacci(n);
      return cache[n];
    },
    calculated: function() {
      return cache;
    }
  }
}

let memoizedFibonacciInstance = memoizedFibonacci();
for (var i=0; i<50; i++) console.log(memoizedFibonacciInstance.get(i));

