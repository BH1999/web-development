var removeDuplicates = (array) => {
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 4, 6, 1, 3])); // [1, 2, 3, 4, 6]
console.log(removeDuplicates([1, 4, 7, 0])); // [1, 4, 7, 0]

