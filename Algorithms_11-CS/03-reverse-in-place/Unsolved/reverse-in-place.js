// This is a function that takes an array and reverses it in place, meaning it reverses it by making changing to the original array and not by creating a new array that is contains the previous array but reversed.

const reverseInPlace = (arr) => {
  // First up, we gotta set a variable that will act as our index keeper and guide us through while we reverse the array in place. We set it to 0 since the first position in an array is at position 0.
  var startPoint = 0;

  // We then use a while loop to let us easily complete the process of reversing just the numbers we need to. Nothing over or under.
  while (startPoint < arr.length - 1) {
    // First up, we get the current element at the end of the array using the "splice" method and then we store that in a temporary variable called "takeEnd".
    var takeEnd = arr.splice(arr.length - 1, 1);
    // We then take that element and put it back into the array, right in front of the current "startPoint".
    arr.splice(startPoint, 0, parseInt(takeEnd.toString()));
    // Lastly, we increment our "startPoint" variable so that way as we go through the array we have a position to grab onto and a location to put our elements in front of.
    startPoint++;
  }
  // This return actually isn't necessary, being that we are modifying the original array but the insructions for this code challenge requested a return so I must leave it here.
  return arr;
};
