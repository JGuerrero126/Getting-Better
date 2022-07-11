// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  var result = 0;
  for (i = 0; i < arr.length; i++) {
    result += arr[i];
    console.log(result);
  }
  return result;
};
