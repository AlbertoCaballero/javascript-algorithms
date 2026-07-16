const filter = checker => list => list.filter(checker);
const loweCaseOf = input => input.toLowerCase();
const includes = what => where => where.includes(what);

const isDodge = input => includes('dodge')(loweCaseOf(input));

const filterDodge = filter(isDodge);

const cars = ['Dodge Charger', 'Ford Mustang', 'Chevy Camaro'];

console.log(filterDodge(cars));

