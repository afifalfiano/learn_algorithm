
function sockMerchant(n, ar) {
    let pair = [];
    if (n >= 1 && n <= 100) {
        for(let i = 0; i < n; i++) {
            for(let k = i + 1; k < n; k++) {
                let calculate = ar[i] - ar[k];
                if (calculate === 0) {
                    console.log(ar[i], ar[k], calculate);
                    pair.push(ar[i]);
                    ar.splice(k, 1);
                    break;
                }
            }
        }
    }
    return pair.length;

}
module.exports = {sockMerchant};
