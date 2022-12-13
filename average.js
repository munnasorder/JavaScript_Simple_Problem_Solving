


function sum (number) {
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        total+= number[i]
    }
    return total;
}
function avg(items) {
	let avg = 0;
	avg += parseFloat(sum(items) / items.length);
	return parseFloat(avg.toPrecision(12));
};


// array element avarage
console.log(avg([1,2,3,4,5]))