//This challenge was to build a function that returns the biggest number in an array.

// This was my first attempt at the function
var maxNum = function (arr) {
  // First we take the given array and sort it, smallest to biggest.
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  // Then we return the last index the array which due to the sort above would be the biggest number in the given array.
  return sortedArr[sortedArr.length - 1];
};

// This is my second attempt at the function, much faster and shorter
var maxNum2 = function (arr) {
  // This one liner handles all the work in the above function on its own.
  return Math.max(...arr);
};
