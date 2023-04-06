function evenNumber(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0 && arr[i + 1] % 2 == 0){
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

console.log(evenNumber([1,2,4,5,6,0,8,9,2,10]));