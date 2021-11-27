
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
    let calculate = 0;
    let dataResult = [];
    for(let i = 0; i< arr.length; i++) {
        calculate += arr[i];
    }
    for(let j = 0; j< arr.length; j++) {
        const data = calculate - arr[j];
        dataResult.push(data);
    }
    let minimum = dataResult[0];
    let maximum = dataResult[0];
    for(let k = 0; k < dataResult.length; k++) {
        if(dataResult[k] > maximum) {
            maximum = dataResult[k];
        } else if (dataResult[k] < minimum) {
            minimum = dataResult[k];
        }
    }
    return `${minimum} ${maximum}`;

}

module.exports = {staircase, miniMaxSum};
