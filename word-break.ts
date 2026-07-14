function wordBreak(s: string, wordDict: string[]): boolean {
    let results: boolean[] = [];

    results.push(check(s, wordDict));
    wordDict = wordDict.sort((a, b) => a.localeCompare(b));
    results.push(check(s, wordDict.toReversed()));

    return results.includes(true);
}

function check(word: string, dict: string[]): boolean {
    let holder = word;

    dict.forEach((word) => {
        while (holder.includes(word)) {
            holder = holder.replaceAll(word, " ");
        }
    });

    holder = holder.replaceAll(" ", "");
    return holder === "";
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
