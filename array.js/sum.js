var sum = (array)=> {
    if (array.length === 1) {
      return array[0];
    }
    else {
      return array.pop() + sum(array);
    }
  };
  
  console.log(sum([1, 2, 3, 4])); // 10
  console.log(sum([0, 0, 0, 1])); // 1
  