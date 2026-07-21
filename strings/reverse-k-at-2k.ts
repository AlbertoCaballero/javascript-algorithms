function reverseStr(s: string, k: number): string {
    const n = s.length;
    const chars = s.split('');

    for (let i = 0; i < n; i += 2 * k) {
        let lchars = i; //character on the left
        let rchars = Math.min(i + k - 1, n - 1); //chars on right
        while(lchars < rchars) {
            [chars[lchars], chars[rchars]] = [chars[rchars], chars[lchars]]; // tuple swap
            lchars++;
            rchars--;
        }
        // console.log(s[i]);
    }
    return chars.join('');
};

console.log(reverseStr("abcdefg", 2)); // expected "bacdfeg"
