// This function searches through on array for a given target

var linearSearch = function (arr, target) {
  // This for loop searches through the entire array, a for loop does the job better than a ".forEach()" function would since we have a very easy way to get the current index with the i variable.
  for (i = 0; i < arr.length; i++) {
    // This checks if the current element matches the target
    if (arr[i] === target) {
      // If it does match then we return the index of the current element
      return i;
    }
  }
  // If the target isn't found then we return -1
  return -1;
};
