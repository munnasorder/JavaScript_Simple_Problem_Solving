let newArray = [];
function push(arr, ...items) {
    for (let i = 0; i < items.length; i++) {
        console.log('top', arr.length)
        arr[arr.length] = items[i]
        console.log('down',arr.length)
    }
    return arr.length;
}

push(newArray, 1,2,3,4);
console.log(newArray)