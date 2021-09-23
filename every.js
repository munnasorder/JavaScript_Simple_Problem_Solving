const myArray = [1,2,3];

function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i], i, arr)) return false;
    }
    return true
}
const result = every(myArray, (doc) => doc > 0)
console.log(result)