let numbers = [...Array(20).keys()]
console.log(numbers)

numbers.splice(0, 0, 5)
console.log(numbers)

numbers.splice(5, 0, 50)
console.log(numbers)

numbers.splice(20, 0, 1)
console.log(numbers)

