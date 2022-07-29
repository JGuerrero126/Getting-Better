// This algorithm involved logging every number up to the number given to the function. However, the catch was to only log the even numbers.

var logEvenNums = function (num) {
  // A modified for loop is used to log the even numbers, it starts at zero and after logging i. After logging i its add 2 to i and logs it again, this process is repeated until i is bigger or equal to the number given. This process is a very simple way to ensure that only even numbers are given and even saves a bit of processing power by not counting every number, it only counts the even numbers by design.
  for (i = 0; i <= num; i += 2) {
    console.log(i);
  }
};
