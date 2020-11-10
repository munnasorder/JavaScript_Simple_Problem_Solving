//How to find a large number from inside an array
let marks = [50, 70, 88, 23, 98, 36, 45, 78, 82]
let max = marks[0];
for (let i = 0; i < marks.length; i++) {
    let element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);