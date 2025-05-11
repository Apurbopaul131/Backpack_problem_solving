// porblem 5:  Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = [20, 100, 45, 44, 43, 99, 30];
const sumOfEvenNumbers = (nums) => {
  const result = nums.reduce((total, num) => {
    if (num % 2 === 0) {
      total = total + num;
    }
    return total;
  }, 0);
  return result;
};
console.log(sumOfEvenNumbers(numbers));
