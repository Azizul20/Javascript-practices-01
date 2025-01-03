const manthlySaving = (allPayments, livingCost) => {
    if (!Array.isArray(allPayments) || typeof (livingCost) !== 'number')
        return 'invalid input';
    let totalPayment = 0;
    for (let i = 0; i < allPayments.length; i++) {
        if (allPayments[i] >= 3000)
            totalPayment += allPayments[i] * 0.8;
        else
            totalPayment += allPayments[i];
    }
    if (totalPayment >= livingCost)
        return totalPayment - livingCost;
    else
        return 'earn more';
}

let allPayments = [1000, 2000, 3000];
let livingCost = 5400;

console.log(manthlySaving(allPayments, livingCost));
