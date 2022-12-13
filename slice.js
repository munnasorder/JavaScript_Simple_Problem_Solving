Array.prototype.ownSlice = function ownSlice (str, end) {
    const arr = this;
    const result = [];

    if (Array.isArray(arr)) {
        const loopContinue = end > arr.length ? arr.length : end;
        for (let i = str; i < loopContinue; i++) {
            result.push(arr[i]);
        }
    }
    return result;
}

const arr = [1,2,3,4,5];
console.log(arr.ownSlice(2,4))