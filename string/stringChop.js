/*Q11. Write a JavaScript function to chop a string into chunks of a given length?
File name suggestion: stringChop.js
Test Data :
console.log(stringChop(‘w3resource’)); // [“w3resource”]
console.log(stringChop(‘w3resource’,2)); // [“w3", “re”, “so”, “ur”, “ce”]
console.log(stringChop(‘w3resource’,3)); // [“w3r”, “eso”, “urc”, “e”]*/


function stringChop (str, size){
    if (str == null) return [];
    str = String(str);
    size = ~~size;
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(stringChop('w3resource'));
console.log(stringChop('w3resource',2));
console.log(stringChop('w3resource',3));