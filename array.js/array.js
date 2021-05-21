var ifArray = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(ifArray('w3resource'));
  console.log(ifArray([1, 2, 4, 0]));