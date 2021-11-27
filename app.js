
function staircase(n) {
    let pager = '';
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n - 1; j++) {
            pager += ' ';
        }
        for(let k = 0; k <= i; k++) {
            pager += '#';            
        }
        pager += '\n';        
    }
    // console.log(pager);
    return pager;
}

function miniMaxSum(arr) {
    let minimum = arr[0];
    let maximum = arr[0];
    let calculateMin = 0;
    let calculateMax = 0;
    for(let i = 0; i< arr.length; i++) {
        if (arr[i] >= maximum) {
            maximum = arr[i];
        } else if (arr[i] <= minimum) {
            console.log(arr[i]);
            minimum = arr[i];
        }
    }
    for(let j = 0; j< arr.length; j++) {
        if (arr[j] !== maximum) {
            calculateMax += arr[j];
        } 
        if (arr[j] !== minimum) {
            calculateMin += arr[j];
        }
    }
    return `${calculateMax} ${calculateMin}`;

}

module.exports = {staircase, miniMaxSum};
