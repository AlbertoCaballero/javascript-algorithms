
interface Product {
  operation(): string;
}

abstract class Creator {
  public abstract factory(): Product;

  public operation(): string {
    const product = this.factory();
    return `Creator: creation with ${product.operation()}\n`;
  }
}

class FirstCreator extends Creator {
  public factory(): Product {
    return new FirstProduct();
  }
}

class FirstProduct implements Product {
  public operation(): string {
    return `Result of first product`;
  }
}

class SecondCreator extends Creator {
  public factory(): Product {
    return new SecondProduct();
  }
}

class SecondProduct implements Product {
  public operation(): string {
    return `Result of second product`;
  }
}

function implementationCode(creator: Creator) {
  console.log('Implementation', creator.operation());
}

console.log('Launched with FirstCreator');
implementationCode(new FirstCreator());

console.log('Launched with SecondCreator');
implementationCode(new SecondCreator());

