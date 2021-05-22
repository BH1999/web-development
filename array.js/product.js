var product = (array)=>{
var    s = 0, p = 1,i;
for (i = 0; i < array.length; i += 1) 
   {
    p *= array[i];
    }
return p;
}
console.log(product([1, 2, 3, 4])); // 24
console.log(product([1, 4, 7, 0])); // 0