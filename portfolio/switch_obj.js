const operations = {
    add: '+',
    multi: '*',
    substr: '-'
}


let a = +prompt('Введите 1-е число?','')
let b = +prompt('Введите 2-е число?','')
let operator = prompt('Введите один из операторов: + - *','')

function calc(a,b,operator) {
    switch (operator) {
        case operations.add:
            return a + b;
            break;
        case operations.multi:
            return a * b;
            break;
        case operations.substr:
            return a - b;
            break;
        default:
            return 'error'
    }
}

let result = calc(a,b,operator)

alert(result)