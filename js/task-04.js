

const incrementListenBtn = document.querySelector('increment');
const decrementListenBtn = document.querySelector('decrement');
const counterValue = 0;


function onIncrementButtonClick () {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

function onDecrementButtonClick () {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

incrementListenBtn.addEventListener('click', onIncrementButtonClick);
decrementListenBtn.addEventListener('click', onDecrementButtonClick);