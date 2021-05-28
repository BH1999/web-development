const roots = (a,b,c) => {
    var sq = Math.pow(b,2)-4*a*c;
    var r1 = (-b + Math.sqrt(sq))/2*a;
    var r2 = (-b - Math.sqrt(sq))/2*a;
    console.log(r1.toFixed(2), r2.toFixed(2));

}
roots(1,5,6);

