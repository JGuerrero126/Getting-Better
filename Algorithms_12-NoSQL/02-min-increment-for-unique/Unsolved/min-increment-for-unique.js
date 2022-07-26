// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function (nums) {
  var sortedArr = nums.sort(function (a, b) {
    return a - b;
  });
  var i = 0;
  while (i < sortedArr.length) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      sortedArr[i + 1]++;
      increments++;
    }
    if (new Set(sortedArr).size === sortedArr.length) {
      console.log("SIZES MATCH");
      finalCount = increments;
      break;
    }
    if (i === sortedArr.length - 1) {
      console.log("STARTING OVER!");
      minIncrement(sortedArr);
    }
    i++;
  }
  console.log("ENDING COUNT: ", finalCount);
  increments = 0;
  return finalCount;
};

var finalCount = 0;
var increments = 0;
