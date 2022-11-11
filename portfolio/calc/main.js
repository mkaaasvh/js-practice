const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');

const operator = document.querySelector('#operators');

const button = document.querySelector('.button__calculator');//create list
const result = document.querySelector('.calculator__result');

const list = document.querySelector('#list')

button.addEventListener('click', function() {
    event.preventDefault();
    
    if(operator.value == 'sum') {
        const newItem = document.createElement('li');
        newItem.classList.add('item');

        list.appendChild(newItem);

        newItem.textContent = +input1.value + +input2.value;
        result.textContent = +input1.value + +input2.value;

        newItem.addEventListener('click', function() {
            list.removeChild(newItem)
        })

    } else if (operator.value == 'subst') {
        const newItem = document.createElement('li');
        newItem.classList.add('item');

        list.appendChild(newItem);

        newItem.textContent = +input1.value - +input2.value;
        result.textContent = +input1.value - +input2.value;

        newItem.addEventListener('click', function() {
            list.removeChild(newItem)
        })

    } else if (operator.value == 'multi') {
        const newItem = document.createElement('li');
        newItem.classList.add('item');

        list.appendChild(newItem);

        newItem.textContent = +input1.value * +input2.value;
        result.textContent = +input1.value * +input2.value;

        newItem.addEventListener('click', function() {
            list.removeChild(newItem)
        })

    } else if (operator.value == 'division') {
        const newItem = document.createElement('li');
        newItem.classList.add('item');

        list.appendChild(newItem);

        newItem.textContent = +input1.value / +input2.value;
        result.textContent = +input1.value / +input2.value;

        newItem.addEventListener('click', function() {
            list.removeChild(newItem)
        })
    }
})

