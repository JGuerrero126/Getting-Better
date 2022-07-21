// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function (arr1, arr2) {
  var interArr = [];
  for (i = 0; i < arr1.length; i++) {
    console.log(arr1);
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        interArr.push(arr1[i]);
      }
    }
  }
  return interArr;
};
