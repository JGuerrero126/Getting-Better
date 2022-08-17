// This function finds the "Peak" of a given array, meaning the number that is higher than any number on its right or left.

// This was my first attempt at the function.
const peakFinder = function (nums) {
  // By sorting the array we get, we can easily find the peak since the peak is the biggest number in the array which after Sorting will be at the end.
  var sortedArr = nums.sort(function (a, b) {
    return a - b;
  });
  // We then return the last element in the array which due to us Sorting it will be the biggest number in the array AKA the peak.
  return sortedArr.pop();
};

// This was my second and final attempt at the function.
const peakFinder2 = (nums) => {
  // The function is now a "one-liner". We use the "max" method from the "Math" class to automatically get the biggest number in the array AKA the peak and then return it.
  return Math.max(...nums);
};
