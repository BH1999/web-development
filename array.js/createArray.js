createArray = (n, val) =>{
    return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
}

console.log(createArray(3, 'default value')); // [“default value”, “default value”, “default value”]
console.log(createArray(4, 'password')); // [“password”, “password”, “password”, “password”]