// LeetCode 74
function searchMatrix(matrix: number[][], target: number): boolean {
    // const n = matrix.length;
    // const m = matrix[0].length;
    // flat matrix into simple vector of length = n x m
    let vector: number[] = [];

    matrix.forEach(row => {
        row.forEach(col => {
            vector.push(col); // matrix[irow, icol]
        });
    });

    return vector.includes(target);
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 11))
