let a = +prompt('Введите 1-е число?','')
let b = +prompt('Введите 2-е число?','')
let operator = prompt('Введите один из операторов: + - *','')

const operations = {
    add: '+',
    multi: '*',
    substr: '-'
}


function calc(a,b,operator) {
    if (operations.add){
        return a + b;
    } else if (operations.substr) {
        return a - b;
    } else if (operations.multi) {
        return a * b;
    } else {
        console.log('error')
    }
}

let result = calc(a,b,operator)

alert(result)
