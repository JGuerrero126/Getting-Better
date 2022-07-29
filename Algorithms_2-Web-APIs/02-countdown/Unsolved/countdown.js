// This functions counts down from a given positive integer to one and logs every number as it goes.

var countdown = function (num) {
  // A modified for loop handles all the work for this function, we set i to the number given to the function and decrement it after logging i until i = 1. At which point 1 is logged and the for loop ends stopping the function.
  for (i = num; i >= 1; i--) {
    console.log(i);
  }
};
