function decrease(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length - 1; j++){
            if(arr[i][j] > arr[i][j + 1]){
                count++;
            }
        }
        if(count == 0){
            console.log("Mảng tại vị trí " + i + " giảm dần");
        }
        count = 0;
    }
}

decrease([[2,1,5,3],
          [1,3,5,7],
          [2,4,6,8],
          [1,4,-3,7]])