// This function is a little strange, it essentially "rotates" an array to the left a certain number of positions. Which means the elements in the array will shifted to the left for how ever many positions the user asks.

const leftRotation = (arr, positions) => {
  // We set up a for loop that will run until i reaches the position requested
  for (i = 0; i < positions; i++) {
    // At every stop along the way we take the first element in the array out using the "shift" method and store that element in a temporary variable.
    var firstPosition = arr.shift();
    // We then take that element and add it to the end of the arry using the "push" method. Effectively moving every element in the array to the left.
    arr.push(firstPosition);
  }
  // Given that we are editing the original array, we don't need to return anything.
};
