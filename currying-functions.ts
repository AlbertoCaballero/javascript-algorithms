// basically function combination in secuence
// considered good practice in functional programing

const curryFunction = function (a: number) {
  return function (b: number) {
    return a + b;
  };
};

const curryArrow = (a: number) => (b: number) => a + b;

console.log(curryFunction(5)(2));
console.log(curryArrow(5)(2) == curryFunction(5)(2));

