function join(arr, sp = ',') {
    let newString = '';
    let i = -1;
    while(++i < arr.length) {
        newString += `${arr[i]} ${( i + 1 ) === arr.length ? '' : sp}`
    }
    return newString;
}

console.log(join([1,2,3,4,5,6,[78]], ' '))