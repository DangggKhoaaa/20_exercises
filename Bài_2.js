function avg(arr){
    let sum = 0;
    count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
            count++;
        }
    }
    result = sum / count;
    return result;
}

console.log(avg([1,-2,3,4,-3,2]));