// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  return sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
};
