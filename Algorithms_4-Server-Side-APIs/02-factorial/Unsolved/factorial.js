// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  var factNum = 1;
  for (i = 1; i <= num; i++) {
    factNum *= i;
  }
  return factNum;
};
