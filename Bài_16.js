function oddNumberCheck(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 2 != 0){
                return "Ma trận có số lẻ";
            }
        }
    }
    return "Ma trận không có số lẻ";
}

console.log(oddNumberCheck([[2,6,8,0],
                            [4,8,2],
                            [0,8,4,9]]));