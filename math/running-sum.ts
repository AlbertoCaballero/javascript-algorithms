function runningSum(nums: number[]): number[] {
    let total: number = 0;
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
        result.push(total);
    }
    return result;
};

const base = [1,2,3,4]; // expected result [1,3,6,10]
console.log(runningSum(base));
