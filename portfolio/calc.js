//task(попробовать проверку еще сделать)
// let a = +prompt('Введите 1-е число?','')
// let b = +prompt('Введите 2-е число?','')
// let operator = prompt('Введите один из операторов: + - *','')

// function calc(a,b,operator) {
//     if (operator === '+'){
//         return a + b;
//     } else if (operator === '-') {
//         return a - b;
//     } else if (operator === '*') {
//         return a * b;
//     } else {
//         console.log('error')
//     }
// }

// let result = calc(a,b,operator)

// alert(result)

//switch
let a = +prompt('Введите 1-е число?','')
let b = +prompt('Введите 2-е число?','')
let operator = prompt('Введите один из операторов: + - *','')

function calc(a,b,operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '*':
            return a * b;
            break;
        case '-':
            return a - b;
            break;
        default:
            return 'error'
    }
}

let result = calc(a,b,operator)

alert(result)

