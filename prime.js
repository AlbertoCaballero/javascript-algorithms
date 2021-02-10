const numbers = [...Array(20).keys()]

function isPrime(n) {
  if (n <= 1) return 'Neither';
  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0)
        return 'Not Prime';
    }
    return 'Prime';
  } else {
    return 'Not Prime';
  }
}

for (var num in numbers) {
  console.log(num, isPrime(num))
}

