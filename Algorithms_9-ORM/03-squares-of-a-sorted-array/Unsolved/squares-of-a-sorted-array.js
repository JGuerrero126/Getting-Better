// This code takes a sorted array, and returns a new array which contains each element from the original array squared and sorted smallest to biggest.

// This is my first attempt at the function.
var sortedSquares = function (arr) {
  // First up, a new array that will contain our new array of squared integers
  var newArr = [];
  // We use a "forEach" method to loop through each element of our given array
  arr.forEach((element) => {
    // We square the current element and push it to our new array
    newArr.push(element * element);
  });

  // Lastly, we sort our new array after all the squared elements have been pushed into it and return the result.
  return newArr.sort(function (a, b) {
    return a - b;
  });
};

// Second go on this function, per the usual thing, its much smaller, faster and more optimized than the first attempt.
var sortedSquares2 = function (arr) {
  // This "one-liner" does the entire above function in one go. We map through the given array, squaring each element. We then sort the result of that map and then return the whole thing. Chaining is a wonderful thing.
  return arr
    .map((element) => element * element)
    .sort(function (a, b) {
      return a - b;
    });
};
