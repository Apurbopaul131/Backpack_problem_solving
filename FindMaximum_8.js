// problem 8: Write a function that takes an array of numbers and returns the maximum value.
let nums = [20, 50, 50, 70, 100, 30, 30, 90];
const findMaxNumber = (nums) => {
  let maxNumber = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }
  return maxNumber;
};
console.log(findMaxNumber(nums));
