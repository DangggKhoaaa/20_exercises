function biggestLine(arr){
    let sum = 0;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
        if(sum > max){
            max = sum;
        }
        sum = 0;
    }
    return max;
}
console.log(biggestLine([[2,1,5,3],
                        [1,3,5,7],
                        [2,4,6,8],
                        [9,4,-3,7]]));