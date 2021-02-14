function primeNumber (n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return 'this is not prime number'
        }
        else{
           return 'its prime number'
        }
    }
}
const result = primeNumber(13)
console.log(result);
//output 'its prime number