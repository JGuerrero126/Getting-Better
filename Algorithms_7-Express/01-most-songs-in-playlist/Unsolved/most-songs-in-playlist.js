// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  if (arr.length < 1) {
    return 0;
  }
  var sum = 0;
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  for (i = 0; i <= sortedArr.length; i++) {
    if (sum > 60) {
      return i - 1;
    }
    if (i === sortedArr.length) {
      return i;
    }
    console.log(i);
    console.log(sum);

    sum += arr[i];
  }
};
