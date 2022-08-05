// This function involved a specific challenge, building a merge sort without using the "sort" method. It could be assumed that the array we are merging would be sorted within their own arrays.

// This function follows the challenge set forth and uses no sort method, the sorting is done manually.
var mergeSorted = function (arr1, arr2) {
  // In order to save as much time as possible, this is a check to make sure that we have two populated arrays and not one full and one empty.
  if (arr1.length < 1 || arr2 < 1) {
    // If we do have an empty array, a ternary operator handles returning the populated array. It checks if the second arrays length is less than one, if it is then we return the first array as the second one is empty and we do the reverse if the second array is the one that is populated.
    return arr2.length < 1 ? arr1 : arr2;
  }
  // Now that we are sure we have arrays we can merge and sort, we set up some base variables to help us along, first up we set up an empty array that will contain our new sorted array.
  var sortedArr = [];
  // Then we create two variables that will act as our indexes for our given arrays. i will be for arr1 and j will be for arr2, giving us a way to check each element in the arrays.
  var i = 0;
  var j = 0;
  // Now we have our primary while loop, this handles the majority of the sorting and is set up to keep going until either i or j is bigger than their respective array's length. Once the while loop finishes, it passes the rest of the job to one of the secondary while loops.
  while (i < arr1.length && j < arr2.length) {
    // This checks if the current index of the first array is smaller than the current index of the second.
    if (arr1[i] < arr2[j]) {
      // If it is then push the current index of the first array into our new array.
      sortedArr.push(arr1[i]);
      // We then increment i to get to the next index on the next loop.
      i++;
    } else {
      // If the check fails then that means the current index of the second array is smaller so we push that into the new array instead.
      sortedArr.push(arr2[j]);
      // We then increment j to get the next index on our next loop.
      j++;
    }
  }
  // If the primary while loop finishes and our index tracker for the first array hasn't reached the end of the array, we set up a small and easy while loop to go through the rest of the array and push the remaining elements into the new array.
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  // If the above secondary check is skipped or done then this while loops checks if j isn't caught up to the end of it's array. If it isn't then we push in the remaining elements to our new array.
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  // At the end of all the loops we return our new sorted array.
  return sortedArr;
};

// This function is my attempt at doing a merge sort with the ability to use the "sort" method. It is unbelievably downsized while retaining all functionality.
const mergeSorted2 = (arr1, arr2) => {
  // In this "one-liner" we concat array2 into array1, sort the combined array and return the result. It quite simply merges and then sorts.
  return arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
};
