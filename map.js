const myArray = [1,2,3,4,5,6,7,8,9];

// map example 1
Array.prototype.myMap = function(cb) {
    let result = [];
    for (let i = 0, length = this.length; i < length; i++) {
        result.push(cb(this[i], i, this));
    };
    return result;
}

// myArray.myMap((doc, i, arr) => console.log(doc));
// output 1 2 3 4 5 6 7 8 9


// map example 2
function myOwnMap(arr, cb) {
    let result = [];
    for (let i = 0, length =  arr.length; i < length; i++) {
        result.push(cb(arr[i], i, arr));
    };
    return result;
}
// myOwnMap(myArray, (doc, i, arr) => console.log(doc));
// output 1 2 3 4 5 6 7 8 9