// This function checks a 2-D array for the number of specified elements, currently the element being counted is the string "X" but it can be changed easily to suit a wide variety of uses.

var arraySearch2D = function (arr) {
  // We first set up a variable to contain the count of the element we are searching for.
  let timesX = 0;
  // Then we use the "forEach" method on our given array to go through each element of our larger array which contains subarray at each position
  arr.forEach((element) => {
    // To search through the subarray that is in the current position, we use a simple for loop
    for (i = 0; i < element.length; i++) {
      // We check if the current element in the subarray matches the element we are searching for. If it does, we increment our count variable
      if (element[i] === "X") timesX++;
    }
  });
  // At the end of both the for loop and the "forEach" method, we return whatever the current count variable is.
  return timesX;
};
