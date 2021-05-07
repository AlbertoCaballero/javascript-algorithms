class Car {
  brand: string;
  model: number;
  type: string;
  price: number;
}

let cars: Car[] = [
  {
    brand: "Toyota",
    model: 2014,
    type: "compacto",
    price: 250000
  },
  {
    brand: "BMW",
    model: 2020,
    type: "deportivo",
    price: 500000
  },
  {
    brand: "Ford",
    model: 2010,
    type: "austero",
    price: 100000
  },
];

// Total price
let total = 0;
cars.forEach(e => total += e.price);
console.log(total);

console.log(cars);
