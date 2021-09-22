const myArray = [1,2,3,4,5,6,7,8,9];

// example 1
Array.prototype.myFind = function(cb) {
    let result = [];
    for (let i = 0, length = this.length; i < length; i++) {
        if (cb(this[i], i, this)) result.push(this[i]);
    };
    return result;
}
const result = myArray.filter((doc, i, arr) => doc > 3);
console.log(result)
// output [ 4, 5, 6, 7, 8, 9 ]

// example 2
function myOwnFilter(arr, cb) {
    let result = [];
    for (let i = 0, length = arr.length; i < length; i++) {
        if (cb(arr[i], i, arr)) result.push(arr[i]);
    }
    return result;
}
const result2 = myOwnFilter(myArray, (doc, i, arr) => doc > 5);
console.log(result2)
// output [ 6, 7, 8, 9 ]