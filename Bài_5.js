function listed(arr, x , y) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= x && arr[i] <= y){
            console.log(arr[i]);
        }
    }
    
}

listed([1,2,3,4,5,6,7,8],2,6);