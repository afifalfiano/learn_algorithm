
function plusMinus(arr) {
    let positive = [];
    let negative = [];
    let zero = [];
    for(let i = 0; i < arr.length; i++)  {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        } else if (arr[i] < 0) {
            negative.push(arr[i]);
        } else {
            zero.push(arr[i]);
        }
    }
    const pos = positive.length/arr.length;
    const neg = negative.length/arr.length;
    const zer = zero.length/arr.length;
    return [pos, neg, zer];
}

module.exports = {plusMinus};
