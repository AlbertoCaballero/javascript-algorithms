
// Rest Syntax (Params)
function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1,2,3,4,5));

// Spread Syntax
numbers = [1,2,3,4,5];
console.log(sum(...numbers));
