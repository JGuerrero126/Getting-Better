// This is another relatively simple function that just tells if a number is odd or even.

var oddOrEven = function (num) {
  // First thing is two get the remainder of the number if its divided by 2.
  if (num % 2 === 0) {
    // If the remainder is 'deeply' equal to 0 then that means the number is able to be cleanly divided by 2 so it must be even. As such the function returns "even" as a string.
    return "even";
  }
  // If the above check fails then the function returns "odd" as a string by default. There is no additional code needed because a number can only be odd or even so if the check fails then you can be sure the number is odd.
  return "odd";
};
