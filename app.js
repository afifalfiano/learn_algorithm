
function app(){}

function plusMinus(data){    
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 0) {
            positive++;
        } else if (data[i] < 0 ) {
            negative-- ;
        } else {
            zero++;
        }
    }
    
    const resultPositive = positive / data.length;
    const resultNegative = (negative / data.length) * -1;
    const resultZero = zero / data.length;
    // for(let i of dataFix) {
    //     console.log(i);
    // }
    return [resultPositive.toFixed(6), resultNegative.toFixed(6), resultZero.toFixed(6)].join(', ');
}

function minMaxSum(arr) {
    
    let min = 0;
    let max = 0;    
    const minMax = arr.sort((a, b) => a - b);
    const total = arr.reduce((acc, result) => acc + result);
    min = total - minMax[0];
    max = total - minMax[minMax.length - 1];
    
    const result = [max, min];
    console.log(result.join(' '))
    return result.join(' ');
    

}

module.exports = {app, plusMinus, minMaxSum};
