const array1 = [1, 4, 19, 10, 7, 23, 8, 0];

var largest = 0;
var secondLargest = 0;

for (let i of array1) {
    if (i > largest) {
        secondLargest = largest;
        largest = i;
    } else if(i > secondLargest) {
        secondLargest = i;
    }
}

console.log(largest)
console.log(secondLargest)
