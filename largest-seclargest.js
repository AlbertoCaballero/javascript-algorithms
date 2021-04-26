const array1 = [1, 4, 12, 10, 7];

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
