matrix1 = [[4,4,4], [2,2,2], [3,3,3]]
matrix2 = [[1,4,3], [3,2,4], [1,2,4]]

matrixSum = (m1, m2) => {
  var res = [[0,0,0,], [0,0,0], [0,0,0]];

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      for (k = 0; k < 3; k++) {
        res[i][j] = m1[i][k] * m2[k][j] + res[i][j];
      }
    }
  }

  return res;
};

console.log(matrix1);
console.log(matrix2);
console.log(matrixSum(matrix1, matrix2));

