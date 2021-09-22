
function join(arr, sp = ',') {
    let newString = '';
    for (let i = 0, length = arr.length; i < length; i++) {
        if ((i+1) === arr.length) newString = newString + arr[i] + sp;
        else newString = newString + arr[i];
    }
    return newString;
}

console.log(join([1,2,3,4,5,6], ' '))