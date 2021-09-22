const myArray = [1,2,3,4,5,6,7,8,9];

// example 1
Array.prototype.myFind = function(cb) {
    for (let i = 0, length = this.length; i < length; i++) {
        if (cb(this[i], i, this)) return this[i];
    };
};

const result = myArray.myFind((doc, i, arr) => doc > 9);
console.log(result);
// output undefined


// example 2
function myOwnMap(arr, cb) {
    for (let i = 0, length = arr.length; i < length; i++) {
        if (cb(arr[i], i, arr)) return arr[i];
    }
}

const result2 = myOwnMap(myArray, (doc, i, arr) => doc > 2);
console.log(result2);
// output 3