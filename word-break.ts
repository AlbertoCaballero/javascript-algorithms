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
        holder = holder.replaceAll(" ", "");
    });

    return holder === "";
}

const tes = "catsandog";
const wrds = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(tes, wrds));
