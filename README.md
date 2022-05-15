# goit-js-hw-06

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
boxesList: document.querySelector('#boxes'),
inputAmount: document.querySelector('input'),
createBtn: document.querySelector("button[data-create]"),
destroyBtn: document.querySelector("button[data-destroy]"),
}

refs.createBtn.addEventListener('click', inputAmountChange);
refs.destroyBtn.addEventListener('click', clearBoxes);

function inputAmountChange(event) {
handleCreate(refs.inputAmount.value);
}

function handleCreate(amount) {
amount = Number(amount);
const curLen = document.querySelector('#boxes').children.length;
if (curLen === amount) {
return;
} else if (curLen === 0) {
createBoxes(amount);
} else if (amount > curLen) {
let lastSize = document.querySelector('#boxes').lastChild.offsetWidth;
createBoxes(amount - curLen, lastSize)
} else if (amount < curLen){
clearBoxes();
createBoxes(amount)
}

}

function createBoxes(amount, lastSize = 0) {
let firstBoxSize = 30;
if (lastSize != 0) {
firstBoxSize = lastSize + 10
}
for (let i = 0; i < amount; i++) {
const addBox = document.createElement('div');
addBox.style.height = firstBoxSize + "px"
addBox.style.width = firstBoxSize + "px"
addBox.style.backgroundColor = getRandomHexColor();
refs.boxesList.append(addBox);
firstBoxSize += 10;
}
}

function clearBoxes() {
refs.boxesList.innerHTML = "";
}

// function createBoxes(amount) {
// let firstBoxSize = 30;
// for (let i = 0; i < amount; i++){
// const addBox = document.createElement('div');
// firstBoxSize += 10;
// addBox.style.height = firstBoxSize + "px"
// addBox.style.width = firstBoxSize + "px"
// addBox.style.backgroundColor = getRandomHexColor();
// refs.boxesList.append(addBox);
// }

// createBtn.addEventListener('input', createBoxes)

// function clearBoxes() {
// boxesList.innerHTML = " ";
// }

// function inputAmountChange(event) {

// }
