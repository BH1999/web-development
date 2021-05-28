const evensort = (num,arr) =>{
    var temp;
    for(var i=0;i<num;i=i+2)
    {
        for(var j=i;j<num;j=j+2)
        {
            if(arr[j]<arr[i])
            {
                temp = arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    console.log(arr);
}


var arr = [3,9,1,44,6]
evensort(5,arr);