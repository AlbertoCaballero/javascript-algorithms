const promiseA = new Promise( (resolve,reject) => {
  resolve(
    () => {
      a = 5;
      b = 10;
      return a + b;
    }
  );
});

// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

