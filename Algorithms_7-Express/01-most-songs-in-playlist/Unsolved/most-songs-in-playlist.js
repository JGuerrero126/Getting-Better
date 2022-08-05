// This is rather strange function, it takes an array of integers that act as "songs" with the integers showing their length. It then checks how many songs can fit into a 60 minute playlist.

var mostSongsInPlaylist = function (arr) {
  // First, we check if the arrays length is less than one, if it is then that means the array is empty so no songs could go on the playlist because there are no songs. We return zero and skip the majority of the code.
  if (arr.length < 1) {
    return 0;
  }
  // If the check fails we set up a base variable to act as our sum or "total length of all the songs we have in the playlist".
  var sum = 0;
  // We take the array and sort it, smallest to biggest so the smallest numbers are first which will ensure we get the maximum number of songs in the playlist as possible.
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  // Here we loop through our sorted array
  for (i = 0; i <= sortedArr.length; i++) {
    // We first check if the current sum is bigger than 60.
    if (sum > 60) {
      // If it is we return i - 1. We take away one as in the current position in the array, we surpassed our 60 minute maximum so we need to go one step back to get back into the tolerable range.
      return i - 1;
    }
    // If the above check fails we check if i is equal to the total array length, if it is then that means we are the end of the array but still below our 60 minute maximum, which would mean that all the songs in the list can fit inside the playlist.
    if (i === sortedArr.length) {
      // Since all the songs fit in the playlist we just return i, we could also return the length of the array as they are the same number at this time.
      return i;
    }
    // If all the checks fail then we add the current element in the array to our sum and go through the loop again.
    sum += arr[i];
  }
};
