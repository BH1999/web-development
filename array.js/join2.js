var join = (arr,sym) =>{

     return arr.join("sym");


}




console.log(join2([“Red”, “Green”, “White”, “Black”])); // “Red,Green,White,Black”
console.log(join2([“Red”, “Green”, “White”, “Black”], ‘’)); // “RedGreenWhiteBlack”
console.log(join2([“Red”, “Green”, “White”, “Black”], ‘,’)); // “Red,Green,White,Black”
console.log(join2([“Red”, “Green”, “White”, “Black”], ‘+’)); // “Red+Green+White+Black”
