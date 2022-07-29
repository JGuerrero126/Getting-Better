// This function returns the product of the two largest numbers in a given array.

var productOfLargestTwo = function (arr) {
  // First thing we need to do is sort the array, smallest number to biggest number.
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  // Then we return the product of the element in the last and second to last index.
  return sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
};
