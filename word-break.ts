function wordBreak(s: string, wordDict: string[]): boolean {
    let results: boolean[] = [];

    results.push(check(s, wordDict, true));
    results.push(check(s, wordDict, false));

    return results.includes(true);
}

function check(word: string, dict: string[], preferLongest: boolean): boolean {
    const sorted = [...dict].sort((a, b) =>
        preferLongest ? b.length - a.length : a.length - b.length,
    );
    let i = 0;
    while (i < word.length) {
        const match = sorted.find((w) => word.startsWith(w, i));
        if (!match) return false;
        i += match.length;
    }
    return true;
}

const tes = "catsandog";
const wrds = ["cats", "dog", "sand", "and", "cat"];
console.log(tes);
console.log(wrds);
console.log(`should be false: ${wordBreak(tes, wrds)}\n`);

const tes2 = "cbca";
const wrds2 = ["bc", "ca"];
console.log(tes2);
console.log(wrds2);
console.log(`should be false: ${wordBreak(tes2, wrds2)}\n`);

const tes3 = "ddadddbdddadd";
const wrds3 = ["dd", "ad", "da", "b"];
console.log(tes3);
console.log(wrds3);
console.log(`should be true: ${wordBreak(tes3, wrds3)}\n`);

const tes4 = "catsandog";
const wrds4 = ["cats", "dog", "sand", "and", "cat"];
console.log(tes4);
console.log(wrds4);
console.log(`should be false: ${wordBreak(tes4, wrds4)}\n`);
