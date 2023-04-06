function absolute_value(arr){
    for(let i = 1; i < arr.length; i++){
        if(Math.abs(arr[i]) < Math.abs(arr[i - 1]))
        console.log(arr[i - 1]);
    }
}

absolute_value([1,-9,-5,6,-8,7])