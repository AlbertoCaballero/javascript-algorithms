numbers = [[11,2,4],[4,5,6],[10,8,-12]]

function diagonalDifference(arr) {
  var ltr = 0;
  var rtl = 0;
  var len = arr[0].length;
  for (var i=0; i < len; i++) {
    ltr += arr[i][i];
    rtl += arr[i][len-i-1];
  }
  return Math.abs(ltr - rtl);
}

console.log(diagonalDifference(numbers));
