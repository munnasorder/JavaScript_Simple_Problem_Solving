const myArray = [1,2,3,4,5,6,7,8,9];

// example 1
Array.prototype.myFindIndex = function(cb) {
    for (let i = 0, length = this.length; i < length; i++) {
        if (cb(this[i], i, this)) return i;
    }
    return -1;
}
const result = myArray.myFindIndex((doc, i, arr) => doc === 5);
console.log(result)
// output 4

// example 2
function myOwnFindIndex(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr[i])) return i;
    }
    return -1;
}

const result2 = myOwnFindIndex(myArray, (doc, i, arr) => doc === 8);
console.log(result2);
// output 7