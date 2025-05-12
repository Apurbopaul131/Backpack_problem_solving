// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

const checkLeapYear = (year) => {
  if (year % 400 === 0) {
    console.log(`${year} is leap year.`);
  } else if (year % 4 === 0 && !(year % 100 === 0)) {
    console.log(`${year} is leap year.`);
  } else {
    console.log(`${year} is not leap year.`);
  }
};
checkLeapYear(1900);
checkLeapYear(2000);
checkLeapYear(2024);
