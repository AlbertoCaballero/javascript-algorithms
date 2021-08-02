const curry = fn => 
  (...args) => args.length >= fn.length 
    ? fn(...args) : (...args) => curry(fn)(...args, ...args2);

const narry = fn =>
  (...args) => args.length === 0
    ? fn()
    : args.reduce( (a, c) => a(c), fn);

const fromBinary = curry((a, b) => a + b);
const fromCurried = narry(a => b => a + b);

