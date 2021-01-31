// Basicaly unique identifiers...ish
symbolOne = Symbol("Description");
symbolTwo = Symbol("Description");

console.log(symbolOne == symbolTwo);

symbolOneFor = Symbol.for("Description");
symbolTwoFor = Symbol.for("Description");

console.log(symbolOneFor == symbolTwoFor);

testObject = {
  name: "Test",
  [Symbol.for("Description")]: Date()
};

console.log(Object.keys(testObject));
console.log(testObject["name"]);
console.log(testObject[Symbol.for("Description")]);

