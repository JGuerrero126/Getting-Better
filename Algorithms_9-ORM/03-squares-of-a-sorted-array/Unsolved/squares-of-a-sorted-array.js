// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function (arr) {
  var newArr = [];
  arr.forEach((element) => {
    newArr.push(element * element);
  });

  return newArr.sort(function (a, b) {
    return a - b;
  });
};
