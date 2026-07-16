function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): number[] {
  let holder: number[] = [];
  for (let i = 0; i < m + n; i++) {
    if (i > m - 1) nums1[i] = nums2[i - m];
  }
  holder = nums1.sort((a, b) => a - b);
  holder.forEach((e, i) => (nums1[i] = e));
  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;

const nums2 = [2, 5, 6];
const n = 3;

console.log(merge(nums1, m, nums2, n));
