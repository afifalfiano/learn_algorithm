
function bonAppetit(bill, k, b) {
    let bActual = 0;
    let key = bill[k];
    for(let i = 0; i < bill.length; i++) {
        bActual += bill[i];
    }
    const splitBill = (bActual - key) / 2;
    const bCharged = b - splitBill;
    console.log(b, splitBill, bCharged, 'cek');
    let result = 0;
    bCharged === 0 ? result = "Bon Appetit" : result = bCharged;
    console.log(result);
    return result;
}

function kangaroo(x1, v1, x2, v2) {
    let result;
    const kangoroo1 = [];
    const kangoroo2 = [];
    let step1 = x1;
    let step2 = x2;
    
    if ((x2 > x1 && v2 > v1)) {
        result = "NO";
    } else {
       for(let i = 1; i < 10000; i++) {
        const calculate1 = step1 + v1;
        const calculate2 = step2 + v2;
        kangoroo1.push(calculate1);
        kangoroo2.push(calculate2);
        step1 = calculate1;
        step2 = calculate2;
        } 
    } 
    
    for(let j = 0; j < kangoroo1.length; j++) {
            if (kangoroo1[j] === kangoroo2[j]) {
                result = "YES";
                break;
            } else {
                result = "NO";
            }
    }
    return result;
}

module.exports = {bonAppetit, kangaroo};
