function rangeBetween(start, end,steps) 
{
  
		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < end; i++, start = start-steps) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			var arro = new Array(end-start+1);
         
		for (var j = 0; j < end; j++, start = start+steps) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}
console.log(rangeBetween(4, 7, 1)); // [4, 5, 6, 7]
console.log(rangeBetween(-4, 7, 2)); // [-4, -2, 0, 2, 4, 6]