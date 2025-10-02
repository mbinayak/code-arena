// function increasingTriplet(nums: number[]): boolean {
//   const l = nums.length;
//   const minArray = new Array(l).fill(1);
//   const maxArray = new Array(l).fill(0);
//   minArray[0] = nums[0];
//   maxArray[l - 1] = nums[l - 1];
//   for (let i = 1, j = l - 2; i < l && j >= 0; i++, j--) {
//     minArray[i] = minArray[i - 1];
//     if (minArray[i] > (nums[i] as number)) {
//       minArray[i] = nums[i];
//     }

//     maxArray[j] = maxArray[j + 1];
//     if (maxArray[j] < (nums[j] as number)) {
//       maxArray[j] = nums[j];
//     }
//   }

//   for (let i = 1; i <= l - 1; i++) {
//     if (
//       minArray[i - 1] < (nums[i] as number) &&
//       (nums[i] as number) < maxArray[i + 1]
//     ) {
//       return true;
//     }
//   }

//   return false;
// }

function increasingTriplet(nums: number[]): boolean {
  let min = Number.POSITIVE_INFINITY,
    secondMin = Number.POSITIVE_INFINITY;
  for (const n of nums) {
    if (n <= min) {
      min = n;
    } else if (n <= secondMin) {
      secondMin = n;
    } else {
      return true;
    }
  }
  return false;
}

export default increasingTriplet;
