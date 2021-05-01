/*Q3. Write a JavaScript function to extract a specified number of characters from a string?
File name suggestion: truncateString.js
Test Data :
console.log(truncateString(“Robin Singh”,4)); // “Robi”*/

function truncateString (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncateString("Robin Singh",4));

