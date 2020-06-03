const bill1 = {
    bank: {
        name: "Privat",
        amount: {
            value: 100,
            currency: "UAH"
        }
    }
}

const bill2 = {
    bank: {}
}

const getBillValueFrom = bill => bill?.bank?.amount?.value
    // (bill && bill.bank && bill.bank.amount && bill.bank.amount.value)
    // ? bill.bank.amount.value
    // : undefined;

console.log(getBillValueFrom(bill1));
console.log(getBillValueFrom(bill2));