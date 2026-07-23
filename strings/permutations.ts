function stringPermutations(str: string): string[] {
  if (str.length <= 2) {
    return str.length === 2 ? [str, str[1] + str[0]] : [str];
  }
  return str.split("").reduce((acc, letter, i) => {
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const results = stringPermutations(remaining).map((val) => letter + val);
    return acc.concat(results);
  }, [] as string[]);
}

const perms = stringPermutations("abca");
const unique = [...new Set(stringPermutations("abca"))];
console.log(`Permutations (${perms.length}): ${perms}`);
console.log(`Unique Permutations (${unique.length}): ${unique}`);
