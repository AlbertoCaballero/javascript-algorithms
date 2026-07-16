let list = new Array(2021).fill(true);

const clearList = new FinalizationRegistry(key => {
  // cleanup code
});

clearList.register(list, 'fsdfs');
list = null;
