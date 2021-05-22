
var reverse = (string) =>{
    
    var array = string.split(' ');
    array.reverse();
    return array.join(' ');

}
console.log(reverse("I love my India")); // ‘India my love I’
console.log(reverse("Oh my Oh")); // ‘Oh my Oh’
