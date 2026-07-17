function rotate(nums: number[], k: number): number[] {
  // normalize k becasue js/ts modulo makes no sense
  const n = nums.length;
  k = ((k % n) + n) % n;

  if (k === 0) return nums;
  const duplicate: number[] = [...nums];
  for (let i = 0; i < n; i++) {
    // left rotation
    // const shifted = (i + k) % n;

    // right rotation
    const shifted = (i + n - k) % n;

    // console.log(`${i}: ${nums[i]} ${shifted}: ${duplicate[shifted]}`);
    nums[i] = duplicate[shifted];
  }
  return nums;
}

const og = [1, 2, 3, 4, 5, 6, 7];
const shift = 3;
console.log(og); // rotated [5,6,7,1,2,3,4]
console.log(rotate(og, shift));
