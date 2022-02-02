function getLastItem<Type>(arr: Type[]): Type {
  return arr[arr.length - 1];
};

console.log(getLastItem([1,2,3,4,5]));

interface Individual<T, U>{
  (firstName: T, age: U): void;
};

function introducePerson<T, U>(firstName: T, age: U): void {
  console.log(`My name is ${firstName} and I am ${age} years old.`);
}

let person: Individual<string, number> = introducePerson;
person("Alberto", 23);

class Collection<T> {
  items: Array<T> = [];

  add(item: T) {
    this.items.push(item);
  }

  remove(item: T) {
    return this.items.splice(
      this.items.indexOf(item),
      1,
    );
  }
}

const numberCollection = new Collection<number>();
numberCollection.add(1);
console.log(numberCollection);
numberCollection.remove(1);

const stringCollection = new Collection<string>();
stringCollection.add('hello');
console.log(stringCollection);
stringCollection.remove('hello');

function agregateHeader<T extends {payload: string}>(req: T) {
  const header = {
    method: 'GET',
    other: 'stuff',
  };
  return {...req, header};
}

let reqOne = agregateHeader({payload: 'Something', color: 'red'});
console.log(reqOne);
// let reqTwo = agregateHeader({name: 'Something', color: 'blue'}); // error

interface LengthOfArg {
  length: number;
}

function logLength<T extends LengthOfArg>(arg: T): T {
  console.log(arg.length);
  return arg;
}
logLength({length: 52, name: 'Amara'}) // 52
logLength([1,2,3]) // 3
logLength('Orange') // 6

