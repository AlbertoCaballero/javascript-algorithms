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

// Create generic function with a type helper
const makeFetch = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

makeFetch<{ name: string; email: string }>(
  "/api/edpoint"
).then((res) => {
  console.log(res);
});

// TS can infer the generic types at runtime
// const addIdToObject = <T>(obj: T): T & {id: string} => {
const addIdToObject = <TObj>(obj: TObj) => {
  return {
    ...obj,
    id: "369"
  };
};

const result = addIdToObject<{
  name: string;
  email: string;
}>({
  name: "Joe",
  email: "joe@doe.com",
});

const resultNoTypeArg = addIdToObject({
  name: "Joe",
  email: "joe@doe.com",
});

resultNoTypeArg.id;

// Constrain to only use function-like type
type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
type Result = GetPromiseReturnType<() => Promise<{
  id: string;
  num: string;
}>>;
// type OutOfConstrain = GetPromiseReturnType<string>;

// Constrain generics passed in
const getKeyWithHighestValue = <TObj extends Record<string, number>>(obj: TObj): {
  key: keyof TObj;
  val: number;
} => {
  const keys = Object.keys(obj) as Array<keyof TObj>;
  let highestKey: keyof TObj = keys[0];
  let highestVal = obj[highestKey];

  for (const key of keys) {
    if (obj[key] > highestVal) {
      highestKey = key;
      highestVal = obj[key];
    }
  }

  return {
    key: highestKey,
    val: highestVal,
  };
};

const resHighKeyVal = getKeyWithHighestValue({
  a: 1,
  b: 10,
  c: 100,
});

const { key, val } = resHighKeyVal;

// Assertions in case TS can't infer
const typedObjKeys = <TObj extends {}>(obj: TObj) => {
  return Object.keys(obj) as Array<keyof TObj>;
};

const res = typedObjKeys({
  name: "Alb",
  age: 24,
});

// Multiple generics
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  if(key === "error") {
    throw Error("Bad key!");
  }
  return obj[key];
};

const value = getValue({
  a: 1,
  b: "something",
  c: true
}, "b");

// Default type params
const createSet = <T = string>() => {
  return new Set<T>();
};
const numberSet = createSet<number>();
const stringSet = createSet();
