function findLargestNumber(numbers){
    let larger = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
const numbers = [1,2,3,4,5,6,7,8,9];
console.log(findLargestNumber(numbers));
//expected output: 9