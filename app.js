const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromDollarToYen = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInYen * 156.5;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "formDollarToYen"
const fromYenToPound = function(valueInPound) {
    // Convertimos el valor a dólares
    let valueInYen = valueInPound * 0.87;
    // Retornamos el valor en dólares
    return valueInYen;
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

