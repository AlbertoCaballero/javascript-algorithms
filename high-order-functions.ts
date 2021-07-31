const memo = (fn: Function) => {
  let memory: any = [];
  return (anything: any) => {
    if(anything in memory) {
      return memory[anything];
    } else {
      const result = fn(anything);
      memory[anything] = result;
      return result;
    }
  };
};

const upperCase = memo((a: String) => a.toUpperCase());
upperCase('8astion');

const otherUpperCase = (anything: any) => memo((a: String) => a.toUpperCase())(anything);
otherUpperCase('8astion');

