function divisible_7(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            if(arr[i] % 7 == 0){
                console.log(arr[i]);
            }
        }
    }
}

divisible_7([4,7,8,14,-21,29]);