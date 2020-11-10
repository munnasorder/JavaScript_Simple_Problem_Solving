const name = ['Munna', 'Munna', 'Rahmat', 'Rabik', 'Rahmat', 'Rakib', 'Emdad', 'Rabik']
const duplicate = [];
for (let i = 0; i < name.length; i++) {
    const element = name[i];
    const index = duplicate.indexOf(element);
    if (index === -1) {
        duplicate.push(element);
    } 
    
}
console.log(duplicate);