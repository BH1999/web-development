/*Q6. Write a JavaScript function to capitalize the first letter of each word in a string?
File name suggestion: capitalizeWords.js
Test Data :
console.log(capitalizeWords(‘js string exercises’)); // “Js String Exercises”*/

function capitalizeWords(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capitalizeWords("js string exercises"));
