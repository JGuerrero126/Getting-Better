// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function (digits) {
  if (digits.length > 1) {
    var lastIndex = digits.length - 1;
    digits[lastIndex]++;
    while (lastIndex >= 0) {
      if (digits[lastIndex] === 10) {
        if (lastIndex !== 0) {
          digits[lastIndex] = 0;
          digits[lastIndex - 1]++;
        } else {
          digits[lastIndex] = 0;
          digits.unshift(1);
        }
      }
      lastIndex--;
    }
    return digits;
  } else if (digits.length === 1) {
    digits[0]++;
    if (digits[0] === 10) {
      digits[0] = 1;
      digits.push(0);
      return digits;
    }
  } else {
    digits.push(1);
    return digits;
  }
};
