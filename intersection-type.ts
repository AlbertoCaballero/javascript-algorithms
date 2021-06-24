interface Runable {
  run(): void;
}

interface Swimable {
  swim(): void;
}

type Duck = Runable & Swimable;

const runAndSwim = (duck: Duck) => {
  duck.run();
  duck.swim();
}

let duck = {
  run() {
    console.log("running");
  },
  swim() {
    console.log("swiming");
  },
};

runAndSwim(duck);
