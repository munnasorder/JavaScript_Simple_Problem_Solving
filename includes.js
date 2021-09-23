const myArray = [1,2,3]

function includes(arr, searchElement, formIndex = 0) {
    for (let i = formIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) return true;
    }
    return false;
}

console.log(includes(myArray, 5))