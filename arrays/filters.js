const words = ['email', 'limit', 'elites', 'exuberant', 'destruction', 'present'];

function isBigEnough(w) { return w.length > 6 }

const beginsWithE = words.filter(word => word.startsWith('e'));
const sixInLength = words.filter(isBigEnough);

console.log(words);
console.log(beginsWithE);
console.log(sixInLength);
