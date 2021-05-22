 var insert = (num) => {

  const str = num.toString();
  //console.log(str);
  const result = [str[0]];
    
  for(let x=1; x<str.length; x++)
    {
      if(str[0]===0 || (str[x-1]%2 === 0)&&(str[x]%2 === 0))
       {
        result.push('-', str[x]);
       }
      else
       {
        result.push(str[x]);
       }
    }
  return result.join('');
}

console.log(insert("025468")); // “0-254-6-8.”
console.log(insert(357)); // 357
console.log(insert(12345)); // 12345