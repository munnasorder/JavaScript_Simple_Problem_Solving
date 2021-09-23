const myString = 'Hello World';



function lastIndexOf(arr, str, searchElement = 0) {

    let newString = arr.split(' ');
    const findWord = newString.find(doc => doc === str)

    for (let i = searchElement; i < arr.length; i++){
        if (str.length > 1) {
            if (findWord === str) {
                    if (arr[i] === (str.charAt())) return i;
                } else {
                return -1;
            }
        } else {
            if(arr[i] === str) return i;
        }
    }
    return -1;
}
console.log(lastIndexOf(myString, 'World'))