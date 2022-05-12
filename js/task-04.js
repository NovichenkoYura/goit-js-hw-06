

const incrementListenBtn = document.querySelector("button[data-action='increment']");
const decrementListenBtn = document.querySelector("button[data-action='decrement']");

let counterValue = 0;


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