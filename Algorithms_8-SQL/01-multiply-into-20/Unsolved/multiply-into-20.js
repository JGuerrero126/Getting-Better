// This function can let you know if any pair of numbers in an array can multiply together to get a product of 20.

const multiplyInto20 = function (arr) {
  // First we set a variable that contains a boolean, this allows us an easy way of getting past nested for loops without any fuss.
  var bool = false;
  // Then we use the "forEach" method on our given array to check each element, it also is visually different from the for loop despite them being used functionally identically in this context which allows for better readability.
  arr.forEach((element) => {
    // This checks if bool is already true, meaning the desired product has already been found. If it is then it skips the secondary for loop.
    if (bool === true) {
      return;
    }
    // This for loops also loops the given array, allows to check the array against itself.
    for (i = 0; i < arr.length; i++) {
      // This is the check that does the functions main point of focus. If a product of 20 is found then return and make our variable that contains a boolean true. We need not worry about duplicate integers since 20 isn't a perfect square.
      if (element * arr[i] === 20) {
        return (bool = true);
      }
    }
  });
  // At the end of the forEach loop, we return our variable.
  return bool;
};
