function LogActivation(target: Friend, property: string, descriptor: TypedPropertyDescriptor<Function>): Object {
  console.log(`Start execution of ${property} at ${new Date().toISOString()}`);
  return {descriptor, target};
}

function LogActivityFactory(message: string) {
  return function(target: Friend, property: string, descriptor: TypedPropertyDescriptor<Function>) {
    LogActivation(target, property, descriptor);
    console.log(`Message: ${message}`);
  }
}

class Friend {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @LogActivityFactory(`Friend.greet() has been instatiated`)
  greet(pall: string) {
    console.log(`Hello, ${pall}. I am ${this.name}.`);
  }

  @LogActivation
  sayHello() {
    console.log('Hello!');
  }
}

let friend = new Friend('Alberto');
friend.greet('Brandon');
friend.sayHello();

// Solve execution event later
// https://stackoverflow.com/questions/36349158/call-typescript-decorator-method-when-the-underlying-function-is-executed
