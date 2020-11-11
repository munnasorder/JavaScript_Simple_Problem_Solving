function animalCount (depth) {
    let animal = 0;
    if(depth <= 10){
        animal = depth * 50; 
    }
    else if(depth <= 20){
        const mile = depth - 10;
        const firstPart = 10 * 50;
        const secondPart = mile * 100;
        animal = firstPart + secondPart;
    }
    else{
        const mile = depth - 20;
        const firstPart = 10 * 50;
        const secondPart = 10 * 100;
        const finalPart = mile * 200;
        animal = firstPart + secondPart + finalPart;
    }
    return animal;
}
const result = animalCount(22);
console.log(result);
//expected output: 1900