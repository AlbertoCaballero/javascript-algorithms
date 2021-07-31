const firstClassType = (input: any) => input; // indentity

const functionAsOutput = function() {
  return firstClassType;
};

// another identity
const functionAsInputAndOutput = function(inputFn: any) {
  return inputFn;
};

firstClassType('value');
functionAsOutput()('value');
functionAsInputAndOutput(firstClassType)('value');
firstClassType(firstClassType)('value');

