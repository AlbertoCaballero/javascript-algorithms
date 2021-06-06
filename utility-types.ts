type Person = {
  name?: string;
  age: number;
}

type Developer = 'jr' | 'sr';

// Partial allows you to not set required props
const partialPerson: Partial<Person> = {
  name: 'Alberto'
}

// Required makes even optional props required
const requierePerson: Required<Person> = {
  name: 'Alberto',
  age: 22
}

// Readonly prevent props to be re-asign
const readonlyPerson: Readonly<Person> = {
  name: 'Panfilo',
  age: 20
}

// Pick includes only selected props
const pickedPerson: Pick<Person, 'age'> = {
  age: 10
}

// Omit excludes the selected props
const omitedPerson: Omit<Person, 'age'> = {
  name: 'Omiterson'
}

// Record allows you to define different types for keys than its props
const recordPerson: Record<Developer, Person> = {
  'jr': { name: 'Alberto', age: 20 },
  'sr': { name: 'Something', age: 30 }
}

// NonNullable allows you to exclude null and undefined form your values
const nonnullPerson: NonNullable<string | null | undefined> = 'Person';

// Extract allows you to extract keys of a certain type
type Extractable = {
  name: string;
  age: number;
  isWorking: boolean;
}

type Extraction = {
  name: string;
  age: string;
}

const extracted: Extract<keyof Extraction, keyof Extractable> = 'name' || 'age';

// Exclude same as extract but reversed
type Excludeable = {
  name: string;
  age: number;
  isWorking: boolean;
}

type Excluding = {
  name: string;
  age: string;
}

const excluded: Exclude<keyof Excludeable, keyof Excluding> = 'isWorking';

console.log(partialPerson);
console.log(requierePerson);
console.log(readonlyPerson);
console.log(pickedPerson);
console.log(recordPerson);
console.log(extracted);
console.log(excluded);

// And many more stuff https://www.typescriptlang.org/docs/handbook/utility-types.html
