// If value of x is null or undefined assign right value
let x;
x ??= 10;
console.log(x);

let y = 5;
y ??= 10;
console.log(y);

// if both values are valid assign right value
let a;
a &&=10;
console.log(a);

let b = 5;
b &&=10;
console.log(b);

// if either of the values are valid assign right value
let k;
k ||= undefined;
console.log(k);

let j;
j ||= 10;
console.log(j);
