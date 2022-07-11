// Write code to return the largest number in the given array

var maxNum = function (arr) {
  console.log(arr);
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  var lastPlace = sortedArr.length - 1;
  return sortedArr[lastPlace];
};
