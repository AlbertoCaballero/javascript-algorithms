// Write a function to find the longest common prefix string amongs an array of strings
// If there is common prefix, return an empty string

const longestCommonPrefix = (list: String[]) => {
    let first: String = list[0];
    let common: String = "";

    for (let i in first) {
        let results: boolean[] = [];
        for (let word of list)
            results.push(firstCommonCharacters(first.slice(0, parseInt(i) + 1), word));

        if (results.every(e => e == true))
            common = first.slice(0, parseInt(i) + 1)
        else
            break;
    }

    return common;
};

const firstCommonCharacters = (characters: String, word: String): boolean => {
    let flag: boolean[] = [];
    for (let i in characters)
        flag.push(characters[i] == word[i]);
    return flag.every((e) => e == true);
};

let common: String[] = ["flower", "flow", "flight"];
let commoner: String[] = ["flower", "flow", "flowter"];
let nocommon: String[] = ["dog", "race", "car"];
let empty: String[] = ["dog", "", "car"];

console.log(longestCommonPrefix(common)); // Should print fl
console.log(longestCommonPrefix(commoner)); // Should print flow
console.log(longestCommonPrefix(nocommon)); // Should print nothing
console.log(longestCommonPrefix(empty)); // Should print nothing
