
const arrayClone= (input) =>
{
   return input.slice();
}
console.log(arrayClone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(arrayClone([1, 2, [4, 0]])); // [1, 2, [4, 0]]