// This function takes two arrays and returns the common element between the two arrays. The mandatory challenge for this function was to not use the "includes" or the "indexOf" functions.

// This is my first attempt at the function as well as the attempt that follows the challenge.
var commonElement = function (arrA, arrB) {
  // We set up nested for loops so we go through both arrays, looping for the entire second array at every position of the first array.
  for (i = 0; i < arrA.length; i++) {
    for (j = 0; j < arrB.length; j++) {
      // Then we make a check to see if the current element being checked from the first array matches the current element from the second array.
      if (arrA[i] === arrB[j]) {
        // If the check is passed, we return the current element being tested from the first array.
        return arrA[i];
      }
    }
  }
};

// This is the second attempt at the function, this time using the "includes" and "indexOf" methods as well.
const commonElement2 = (arrA, arrB) => {
  // Firstly, we use a "forEach" method to go through the first array
  arrA.forEach((element) => {
    // Then we check if the second array includes the current element being tested
    if (arrB.includes(element)) {
      // If it does we return the index of the current element in the first array as a new temporary variable
      return (index = arrA.indexOf(element));
    }
  });
  // After the "forEach" method is done, we use the index variable we created to return the element from that position in the first array.
  return arrA[index];
};
