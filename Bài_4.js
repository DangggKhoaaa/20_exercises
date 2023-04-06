function swap(arr){
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(swap([1, 2, 4, 5, 3, 6, 7, 10, -2]))