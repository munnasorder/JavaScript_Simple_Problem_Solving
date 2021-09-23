// example 1
function concatExOne(arr, ...items) {
    for (let i = 0, length = items.length; i < length; i++) {
        if(Array.isArray(items[i])) arr.push(...items[i]);
        else arr.push(items[i]);
    }
    return arr;
}

// console.log(concatExOne([1,2,3], 11,22,33,[111,[1111]]));

// example 2
function concatExTwo(arr, ...items) {
    return [...arr, ...items.flat()]
}

// console.log(concatExTwo([1,2,3], 11,22,33,[111,[1111]]));
console.dir(Array.prototype)