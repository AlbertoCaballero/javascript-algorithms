numbers = [3,6,7,12,34,45,23,1]

console.log(numbers)

// Map
console.log(numbers.map(e => e*2))

// Filter
console.log(numbers.filter(e => e > 5))

// Reduce
console.log(numbers.reduce((max, num) => num > max ? num : max))
console.log(numbers.reduce((min, num) => num < min ? num : min))

