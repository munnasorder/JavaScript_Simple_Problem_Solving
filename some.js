const myArray = [1,2,3];

function some(arr, cb) {
    for(let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) return true;
    }
    return false;
}

console.log(some(myArray, doc => doc > 2))