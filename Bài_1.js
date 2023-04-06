function sum(arr){
    let result = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i-1]){
            result += arr[i]
        }
    }
    return result;
}

console.log(sum([1,3,5,2,6,4,8,7]));