import _ from './node_modules/lodash/lodash.js';

const original = [
    {id: '1', selected: false},
    {id: '2', selected: false},
    {id: '3', selected: true},
    {id: '4', selected: false},
    {id: '5', selected: true},
    {id: '6', selected: false},
];

const selected = [
    {id: '3', selected: true},
    {id: '4', selected: true},
    {id: '6', selected: true},
];

const merge = _.unionBy(selected, original, 'id');
const algorithm_merge = original.map(og => {
    if(selected.some(sl => sl.id === og.id)) {
        return selected.find(e => e.id === og.id);
    } else {
        return og;
    }
});

console.log('Original', original);
console.log('Selected', selected);
console.log('Merge', merge);
console.log('Algorithm Merge', algorithm_merge);
