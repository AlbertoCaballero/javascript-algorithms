// Write a function to find the longest common prefix string amongs an array of strings
// If there is common prefix, return an empty string

function longestCommonPrefix(list: String[]): String {
    let first: String = list[0];
    let common: String = "";
    for (let i in first) {
        let results: boolean[] = [];
        let slice = first.slice(0, parseInt(i) + 1);
        list.forEach(word => results.push(firstCommonCharacters(slice, word)));
        if (results.every(e => e == true)) common = slice;
        else break;
    }
    return common;
};

function firstCommonCharacters(characters: String, word: String): boolean {
    for (let i in characters) if (characters[i] != word[i]) return false;
    return true;
};

let common: String[] = ["flower", "flow", "flight"];
let commoner: String[] = ["flower", "flow", "flowter"];
let nocommon: String[] = ["dog", "race", "car"];
let empty: String[] = ["dog", "", "car"];

console.log(longestCommonPrefix(common)); // Should print fl
console.log(longestCommonPrefix(commoner)); // Should print flow
console.log(longestCommonPrefix(nocommon)); // Should print nothing
console.log(longestCommonPrefix(empty)); // Should print nothing
