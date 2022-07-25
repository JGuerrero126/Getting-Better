// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
  var endPoint = arr.length - 1;
  var startPoint = 0;

  while (startPoint < endPoint) {
    var takeEnd = arr.splice(endPoint, 1);
    var moveToPlace = arr.splice(startPoint, 0, parseInt(takeEnd.toString()));
    startPoint++;
  }
  return arr;
};
