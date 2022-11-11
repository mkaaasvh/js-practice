let str = 'svetlana'

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


console.log(ucFirst(str))

//2
let stringa = 'xxx' 

function checkSPam(str) {
    let loweStr = str.toLowerCase();

    if (loweStr.includes('viagra') || loweStr.includes('xxx')){
        console.log(true)
    } else {
        console.log(false)
    }
}

checkSPam(stringa)

//3
let stringi = 'Вот, что мне хотелось бы сказать на эту тему:'

function truncate(str, maxlength) {
    if(str.length != maxlength) {
        console.log(str.slice(0, maxlength) + '…')
    } else {
        console.log(str)
    }
}

truncate(stringi,2)

//4
let price = '$120'

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue(price))

//5 
let value = 'Strada';
let value1 = 'Stradadaaaaa';

function showVerticalMessage(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1)

    if(result.length > 7) {
        return result.slice(0,7)
    } else {
        return result
    }
}

console.log(showVerticalMessage(value1))



