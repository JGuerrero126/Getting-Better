// This function takes an array of integers and creates a new array made up of the given array where each element is either doubled or tripled.

// This was my first attempt at the function
var doubleTripleMap = function (arr) {
  // First we set up an empty array as a variable to contain our new array where we will push our changed elements
  var newArr = [];
  // Then we begin looping through our given array
  arr.forEach((element) => {
    // We set up a check, to see if the current element is cleanly disivible by 2, if it is that means the number is even. So according to the request for this function we must double it.
    if (element % 2 === 0) {
      // If the check passes, we double our current element and push the product to our new array.
      newArr.push(element * 2);
    } else {
      // If the check fails, it means our element is odd so we must triple it before pushing it to the new array.
      newArr.push(element * 3);
    }
  });
  // At the end of our loop, we return our new array.
  return newArr;
};

// This is my second attempt at the function, as with the rest of the second attempts, a whole heap of improvements to every apsect have been made.
const doubleTripleMap2 = (arr) => {
  // With what is functionally a "one-liner" we do everything in one go. First we set up a return so the result we get is returned, then we map through our given array.
  return arr.map((element) => {
    // We use a ternary operator to return the desired element, it functions identically to our if statement in the previous function but is much smaller and faster, saving both processing time and space in terms of lines of code.
    return element % 2 === 0 ? element * 2 : element * 3;
  });
};
