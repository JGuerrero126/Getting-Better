// This function returns the factorial of the given number. A factorial is the product of all positive integers counting up to and including the given number.
// For Example, if the given number is 3 then the Factorial would be 6 because 1 times 2 times 3 equals 6.

var factorial = function (num) {
  // First we set up a base integer of 1, this will be our starting point of our factorial function.
  var factNum = 1;
  // We use a for loop that goes up to and includes the given number
  for (i = 1; i <= num; i++) {
    // At each stop in the for loop, we multiply the base variable by the current number in the for loop and reassign the base variable to the product
    factNum *= i;
  }
  // After the for loop, just return the base variable which contains the factorial of the given number
  return factNum;
};
