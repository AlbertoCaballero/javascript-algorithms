// LeetCode 2911. Minimum Changes to Make K Semi-palindromes
function minimumChanges(s: string, k: number): number {
    const n = s.length;

    // cost[i][j]: min changes to make s[i..j) a semi-palindrome (length j-i)
    const cost: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = i + 2; j <= n; j++) { // length must be >= 2
            cost[i][j] = semiPalindromeCost(s.slice(i, j));
        }
    }

    // dp[i][j]: min changes to split s[0..i) into j semi-palindromes
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(Infinity));
    dp[0][0] = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            for (let m = 0; m <= i - 2; m++) {
                if (dp[m][j - 1] === Infinity) continue;
                dp[i][j] = Math.min(dp[i][j], dp[m][j - 1] + cost[m][i]);
            }
        }
    }

    return dp[n][k];
};

/** Check if a string is palindrome */
// const isPalindrome = (s: string) => s === s.split("").reverse().join("");

/** Returns a list of all valid whole divisors except itself */
// const divisors = (n: number) => {
//     let divs = [];
//     for (let i = 0; i < n; i++) {
//         if (n % i == 0) {
//             divs.push(i);
//         }
//     }
//     return divs;
// }

/** Calculates the cost for a subsequence to be a palindrome */
function costForDivisor(sub: string, d: number): number {
    const n = sub.length;
    let changes = 0;
    for (let r = 0; r < d; r++) {
        // collect the group: indices r, r+d, r+2d, ...
        const group: string[] = [];
        for (let i = r; i < n; i += d) group.push(sub[i]);
        // two-pointer palindrome-fix cost
        let lo = 0;
        let hi = group.length - 1;
        while (lo < hi) {
            if (group[lo] !== group[hi]) changes++;
            lo++;
            hi--;
        }
    }
    return changes;
}

/** Calculates the cost for subsequence to be a semipalindrome */
function semiPalindromeCost(sub: string): number {
    const n = sub.length;
    let best = Infinity;
    for (let d = 1; d < n; d++) {
        if (n % d === 0) best = Math.min(best, costForDivisor(sub, d));
        // if (n % d === 0) {
        //     let changes = 0;
        //     for (let r = 0; r < d; r++) {
        //         let low = r;
        //         let high = n - 1 - ((n - 1 - r) % d);

        //         const group: string[] = [];
        //         for (let idx = r; idx < n; idx += d) {
        //             group.push(sub[idx]);
        //         }
        //         let a = 0;
        //         let b = group.length - 1;
        //         while(a < b) {
        //             if (group[a] !== group[b]) changes++;
        //             a++;
        //             b--;
        //         }
        //     }
        //     best = Math.min(best, costForDivisor(sub, d));
        // }
    }
    return best;
}
