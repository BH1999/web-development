const fahrenheit = (celcius) =>{

    var result = celcius * (9/5) +32;
    return result.toFixed(2);

}


console.log(fahrenheit(12));