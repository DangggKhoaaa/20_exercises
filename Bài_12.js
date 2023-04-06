function ascending(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i + 1]){
            count++;
        }
    }
    if(count == arr.length - 1){
        return "Mảng tăng dần";
    }
    else return "Không phải mảng tăng dần";
}

console.log(ascending([1,2,4,5,7,9,6,10]));