/*Q4. Write a JavaScript function to parameterize a string?
File name suggestion: stringParameterize.js
Test Data :
console.log(stringParameterize(“Robin Singh from USA.“)); // “robin-singh-from-usa”*/

function stringParameterize(str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(stringParameterize("Robin Singh from USA."));
