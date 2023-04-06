function matrix(arr){
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i][0] < arr[i + 1][0]){
            count++;
        }
    }
    if(count == 0){
        return "Cột ma trận giảm dần";
    }
    else 
        return "Cột ma trận không giảm dần";
}

console.log(matrix([[6,2,0],
                    [2,2,1],
                    [-1,0,-8],
                    [3,9,-5]]));