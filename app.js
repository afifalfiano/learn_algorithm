
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

module.exports = {bonAppetit};
