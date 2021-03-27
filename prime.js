const numbers = [...Array(100).keys()]

function isPrime(n) {
  if (n <= 1) return null;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0)
      return false;
  }
  return true;
}

for (var num in numbers) {
  if (isPrime(num)) console.log(num);
}

