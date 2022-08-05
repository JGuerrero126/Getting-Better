// This function takes two arrays and returns the intersection of the two arrays, meaning it returns any time an element appears in both arrays.

var arrayIntersection = function (arr1, arr2) {
  // We set up an empty array as a variable we can push to it whenever we encounter a match between the arrays.
  var interArr = [];
  // We use a "forEach" method on our first array to go through each element
  arr1.forEach((element) => {
    // Then we set up a for loop to loop through the second array
    for (j = 0; j < arr2.length; j++) {
      // We then use an if statement to check if the current element from our first array matches the current element from the second array.
      if (element === arr2[j]) {
        // If a match is found, we remove that element from the second array which stops any chances of duplicates causing an inaccurate intersection.
        arr2.splice(j, 1);
        // We then push the current element into our new array that will contain the intersection.
        interArr.push(element);
        // We then return back to end the loop early
        return;
      }
    }
  });
  // At the end of our loops, we return our new array containing the intersection.
  return interArr;
};
