const isPalindrome = (word: string) => word === word.split('').reverse().join('');

const words = ['bab', 'hello', 'anna', 'bannana'];

words.forEach(e => {
    console.log(e, isPalindrome(e));
});
