class ChainFunctions {
  functionOne(paramOne) {
    console.log('Function One: ', paramOne);
    return this;
  }
  functionTwo(paramTwo) {
    console.log('Function Two: ', paramTwo);
    return this;
  }
  functionThree(paramThree) {
    console.log('Function Three: ', paramThree);
    return this;
  }
}

const chain = new ChainFunctions();
chain
  .functionOne(1)
  .functionTwo(2)
  .functionThree(3);

