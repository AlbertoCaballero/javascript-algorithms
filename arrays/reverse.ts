const userName = "Alberto";

const reverseString = (arr: string): string => {
  const chars = [...arr];
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }
  return chars.concat().toString();
};

console.log(userName);
console.log([...userName].reverse().concat().toString());
console.log(reverseString(userName));
