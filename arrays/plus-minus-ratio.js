const numbers = [-4, 3, -9, 0, 4, 1]

const plusMinus = (arr) => {
  var len = arr.length;
  var plus = arr.filter(e => e > 0);
  var minus = arr.filter(e => e < 0);
  var zero = arr.filter(e => e == 0);
  console.log(plus.length/len);
  console.log(minus.length/len);
  console.log(zero.length/len);
};

plusMinus(numbers);

