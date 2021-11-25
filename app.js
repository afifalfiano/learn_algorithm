
function app(a, b){
    let scoreA = 0;
    let scoreB = 0;
    for(let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA = scoreA + 1;
        } else if (a[i] < b[i]) {
            scoreB = scoreB + 1;
        } else {
            scoreA = scoreA + 0;
            scoreB = scoreB + 0;
        }
    }
    let result = [scoreA, scoreB];
    return result;
}

module.exports = app;
