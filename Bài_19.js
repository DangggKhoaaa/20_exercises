function largestEvenNumber(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 2 == 0 && arr[i][j] > max){
                max = arr[i][j];
            } 
        }
    }
    return max
}

console.log(largestEvenNumber([[1,4,3,11],
                                [7,3,8],
                                [-10,7,-3,9]]));