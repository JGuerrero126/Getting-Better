// This algorithm called for building a function that logs every number in an array, however if the current number able to cleanly divisible by 3 then log "Fizz" in its place. Also, if the number is cleanly divisible by 5 then log "Buzz" in its place and the if the number is cleanly divisible by 3 and 5 then log "Fizz Buzz" in its place.

var fizzBuzz = function (arr) {
  // A for loop handles going through each stop of the array, at each number it checks first if the number is cleanly divisible by both 3 and 5, after that it checks if it is divisible by 3 or 5 individually. The order for the individual checks are unimportant but it is most important to first check if it matches both. If none of the if statements are met than it simply logs the current number.
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (arr[i] % 3 === 0) {
      console.log("Fizz");
    } else if (arr[i] % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(arr[i]);
    }
  }
};
