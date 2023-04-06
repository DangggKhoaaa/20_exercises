function check(arrA, arrB){
    let count = 0;
    for(let i = 0; i < arrB.length; i++){
        for(let j = 0; j < arrA.length; j++){
            if(arrB[i] == arrA[j]){
                count++;
            }
        }
    }
    if(count == arrA.length){
        return "Các phần tử của mảng a đều có trong mảng b"
    }
    else return "Các phần tử của mảng a chưa có trong mảng b"
}

console.log(check([5,9,3,0],[1,2,3,4,5,6,7,8,9]));