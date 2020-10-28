let someString = 'hello';
console.log(typeof someString[Symbol.iterator]); // "function"

// String's default iterator returns the string's code points one by one:
let iterator = someString[Symbol.iterator]();

console.log(...iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


for (let c of someString) console.log(c);


