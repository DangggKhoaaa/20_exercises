function perfectSquare(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(parseFloat(Math.sqrt(arr[i])) == parseInt(Math.sqrt(arr[i]))){
            count++;
            console.log(`Số chính phương tại vị trí ${i} có giá trị là ${arr[i]}`); 
        }
    }
    if(count == 0){
        console.log("Mảng không có số chính phương");
    }
}

// console.log(parseFloat(Math.sqrt(5)));
// console.log(parseInt(Math.sqrt(5)));

perfectSquare([1,3,4,7,9,13,16,20,25]);