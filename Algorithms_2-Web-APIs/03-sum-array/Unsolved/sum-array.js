// This algorithm required building a function that returns the sum of every number in an array.

// This was my first attempt at building the function
var sumArray = function (arr) {
  // First we set up a variable that is an integer set to 0, this is our starting base before we starting adding all the numbers in the array.
  var result = 0;
  // We then go through the array using a for loop, at each stop we add the current index of the array to our result variable.
  for (i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  // After the arr has been gone through, we return our result variable.
  return result;
};

// This was my second attempt at the function, its size and steps are greatly "reduced" (lol) due to the use of a very traditional reduce function on the given array.
var sumArray2 = function (arr) {
  // This is a one-liner that can be explained as doing all of the steps in the above function but simply on one line.
  return arr.reduce((a, b) => a + b);
};
