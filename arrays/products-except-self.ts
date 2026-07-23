// LeetCode 238
function productExceptSelf(nums: number[]): number[] {
    // with division is faster, not correct
    // const q = nums.reduce((a, c) => a * c);
    // return nums.map(e => e === 0 ? e : q / e);
    // return nums.reduce((acc, curr, i) => {
    //     return acc * nums[i+1];
    // })

    // This is correct, but o(n**2)
    // const answer: number[] = new Array(nums.length);
    // for (let i = 0; i < nums.length; i++) {
    //     answer[i] = nums.toSpliced(i, 1).reduce((acc, cur) => acc * cur);
    // }
    // return answer;

    const l = nums.length;
    const answer: number[] = new Array(l).fill(1);

    // Product of all elementes to the left of i
    let prefix = 1;
    for (let i = 0; i < l; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    // Product of all elements to the rigth of i
    let sufix = 1;
    for (let i = l - 1; i >= 0; i--) {
        answer[i] *= sufix;
        sufix *= nums[i];
    }

    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4])); // Expected [24,12,8,6]
