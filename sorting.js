
less = (a, b) => { return a-b; };
more = (a, b) => { return b-a; };

items = [5, 6, 8, 12, 15, 2, 65, 6, 8, 12, 15, 2, 6];
console.log(items);
console.log(items.sort(less));
console.log(items.sort(more));

