
const nums: number[] = [3, 1, 3, 4, 2];

function findDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return nums[j];
        }
    }
};

function findDuplicate(nums: number[]): number {
    nums.sort((a, b) => a - b);
    for(let i = 1; i < nums.length; i++) 
        if(nums[i] === nums[i-1]) return nums[i];
};

console.log(findDuplicate(nums));
