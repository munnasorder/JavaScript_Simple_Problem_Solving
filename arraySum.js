function getArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const numbers = [1, 2, 3, 6, 5, 5, 4, 2 ]
const result = getArraySum(numbers);
console.log(result);
//expected output: 28