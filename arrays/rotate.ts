function rotate(nums: number[], k: number): number[] {
  // normalize k becasue js/ts modulo makes no sense
  k = ((k % nums.length) + nums.length) % nums.length;

  if (k === 0) return nums;
  const duplicate: number[] = [...nums];
  for (let i = 0; i < nums.length; i++) {
    // left rotation
    // const shifted = (i + k) % nums.length;

    // right rotation
    const shifted = (i + nums.length - k) % nums.length;

    // console.log(`${i}: ${nums[i]} ${shifted}: ${duplicate[shifted]}`);
    nums[i] = duplicate[shifted];
  }
  return nums;
}

const og = [1, 2, 3, 4, 5, 6, 7];
const shift = 3;
console.log(og); // rotated [5,6,7,1,2,3,4]
console.log(rotate(og, shift));
