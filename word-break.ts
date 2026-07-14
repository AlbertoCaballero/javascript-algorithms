function wordBreak(word: string, wordDict: string[]): boolean {
    const dictSet = new Set(wordDict);
    const n = word.length;
    const dp: boolean[] = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && dictSet.has(word.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}

// aproximation, not real correctness
// 45 / 48 testcases passed
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

// aproximation, not real correctness
// 44 / 48 testcases passed
function check2(word: string, dict: string[]): boolean {
    let holder = word;

    dict.forEach((word) => {
        while (holder.includes(word)) {
            holder = holder.replaceAll(word, " ");
        }
        holder = holder.replaceAll(" ", "");
    });

    // holder = holder.replaceAll(" ", "");
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

const tes4 = "catsandog";
const wrds4 = ["cats", "dog", "sand", "and", "cat"];
console.log(tes4);
console.log(wrds4);
console.log(`should be false: ${wordBreak(tes4, wrds4)}\n`);
