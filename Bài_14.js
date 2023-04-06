function matrixTest(arrA, arrB){
    let count = 0;
    for(let i = 0; i < arrA.length; i++){
        if(arrA[i] > 0){
            for(let j = 0; j < arrB.length; j++){
                if(arrB[j] > 0){
                    count++;
                }
                return "Mảng 2 chiều không toàn dương";
            }
        }
        return "Mảng 2 chiều không toàn dương";
    }
    if(count == arrB.length - 1){
        return "Mảng 2 chiều toàn dương";
    }
}

console.log(matrixTest([1,2,3,4,5,6],[4,2,5,-3,6]));