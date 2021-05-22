var frequent = (array) =>{
var mf = 1;
var m = 0;
var item;
for (var i=0; i<array.length; i++)
{
        for (var j=i; j<array.length; j++)
        {
                if (array[i] == array[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = array[i];
                }
        }
        m=0;
}
return item+" ( " +mf +" times ) " ;
}

//console.log(frequent.apply(null,[3, ‘a’, ‘a’, ‘a’, 2, 3, ‘a’, 3, ‘a’, 2, 4, 9, 3])); // a ( 5 times )
console.log(frequent([1, 2, 3, 4, 5])); // 1 ( 1 time )
console.log(frequent([5, 2, 3, 1, 2, 4, 1])); // 2 ( 2 times )