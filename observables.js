import { Observable } from './node_modules/rxjs/Observable.js';

const observable = new Observable( subscriber => {
  console.log("Hello!");
  subscriber.next(45);
  subscriber.next(55);
  subscriber.next(65);
});

console.log('before');
observable.subscribe(x => {
    console.log(x);
});
console.log('after');
