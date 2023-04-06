function findFirstEvenNumber(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] % 2 == 0){
                return "Số chẵn đầu tiên là: " + arr[i][j];
            }
        }
    }
    return "Ma trận không có số chẵn";
}

console.log(findFirstEvenNumber([
                                [1,9,3,11],
                                [7,3,9],
                                [-1,7,-3,9]]));
