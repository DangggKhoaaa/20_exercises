function prime(num){
    if(num < 2){
        return false;
    }
    if(num == 2){
        return true;
    }
    if(num > 2){
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }
}


function findPrime(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(prime(arr[i]) == true){
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}

console.log(findPrime([1,2,3,6,8,9,11,13]));
