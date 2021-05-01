/*Q8. Write a JavaScript function that takes a string which can have both lower and upper case letters as a parameter and converts alternate character to upper case & lower case, starting from upper case?
File name suggestion: alternateCase.js
Test Data :
console.log(alternateCase(‘samsung’)); // “SaMsUnG”*/
function capitalize (str1){
    return str1.charAt(0).toUpperCase() + str1.slice(1);
  }
      
function swapCase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
//var a = (swapCase('AaBbc'));
console.log(capitalize (swapCase('AaBbc')));
