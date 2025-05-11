let nums = [20, 50, 50, 70, 100, 30, 30, 90];

let uniqueNums = [];
nums.forEach((num) => {
  if (!uniqueNums.includes(num)) {
    uniqueNums.push(num);
  }
});
console.log(uniqueNums);
