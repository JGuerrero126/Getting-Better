// This is a function that takes an array of integers and returns the minimum number of increments required across the array to ensure that every number is unique, this function uses recursion.

const minIncrement = function (nums) {
  // First thing first, we set a variable to help us go through our given array. We also use this reset us on any subsequent run throughs.
  var i = 0;
  // Next we take our given array of integers and sort them, smallest to biggest. This helps to make our function much easier and reduces the needed number of increments. During subsequent run throughs of the function, this is a key aspect as it resets our array which may have been disrupted due to the increments.
  var sortedArr = nums.sort(function (a, b) {
    return a - b;
  });
  // Then we use a while loop to go through our newly sorted array
  while (i < sortedArr.length) {
    // Within our loop we have a series of checks that will help us through this function.
    // First up is a check to see if the current element in the array is deeply equal to the next element in the array.
    if (sortedArr[i] === sortedArr[i + 1]) {
      // If they are found to be equal then we increment the next element in the array, making them no longer deeply equal while also making them unique from each other.
      sortedArr[i + 1]++;
      // We then increment our "increments" variable so we can keep track of how many times we have incremented any integers in this array.
      increments++;
    }
    // Our next check is whether or not our current array length is equal to the size of a Set made from our current array. Set's by default remove any duplicates when they are made so if the sizes match then that means so duplicates were removed when the Set was made so every number is unique. This is also our "exit" check, meaning if this check is passed then the function as a whole will end.
    if (new Set(sortedArr).size === sortedArr.length) {
      // If the check is passed then we pass our total amount of increments to our "finalCount" variable as a way of keeping track of it while also removing the option for all our functions to cause any errors.
      finalCount = increments;
      // We then break the loop, which also recursively breaks all the other loops.
      break;
    }
    // This check is what makes our function recursive. It checks to see if we have made it to the end of the array.
    if (i === sortedArr.length - 1) {
      // If we have then we call our entire function again and pass it our current array, which restarts the function but keeps the progress we have made of incrementing the array.
      minIncrement(sortedArr);
    }
    // If all of those checks fail then we increment our i variable and go back to the top of the while loop.
    i++;
  }
  // Once our while loop is done, we reset our increments variable to 0. We do this so if we call the function multiple times in a row we can be sure the increments don't add up as they go from array to array and every new array passed gets a fresh count.
  increments = 0;
  // Lastly, we return our finalCount variable which contains the amount of total increments we made to our array.
  return finalCount;
};

// These variables are set up outside due to the recursive nature of the array, having them outside allows us to access them and not have to worry about the recursive functions causing any problems.
var finalCount = 0;
var increments = 0;
