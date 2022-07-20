const multiplyInto20 = function (arr) {
  var bool = false;
  arr.forEach((element) => {
    for (i = 0; i < arr.length; i++) {
      if (element * arr[i] === 20) {
        return (bool = true);
      }
    }
  });
  return bool;
};
