var last = (array, n) => {
    if (array == null) 
      return 0;
    if (n == null) 
       return array[array.length - 1];
    if (n < 0)
       return [];

    if(n>array.length)
        return array;

    return array.slice(array.length-n, n+1);
     
    };
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));