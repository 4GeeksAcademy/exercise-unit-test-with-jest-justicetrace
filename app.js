const sum = (a,b) => {
    return a + b
};

console.log(sum(6,4))



// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


module.exports = {sum, fromEuroToDollar};


