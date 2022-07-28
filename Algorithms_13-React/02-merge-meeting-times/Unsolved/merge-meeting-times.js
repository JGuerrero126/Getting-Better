// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function (arr) {
  console.log(arr);
  var j = 0;
  var mergedArr = [];
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i][j]);
    console.log(arr[i + 1][j]);
    console.log(arr[i][j + 1]);
    console.log(arr[i + 1][j + 1]);

    if (arr[i][j] < arr[i + 1][j] && arr[i][j + 1] === arr[i + 1][j + 1]) {
      console.log("MERGING");
      mergedArr.push([arr[i][j], arr[i + 1][j + 1]]);
      console.log(mergedArr);
    } else {
      console.log("NOT MERGING");
      mergedArr.push(arr[i]);
      console.log(mergedArr);
    }
  }
  return mergedArr;
};
