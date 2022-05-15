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
  let amount = Number(refs.inputAmount.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  clearBoxes();
  let firstBoxSize = 30;
  for (let i = 0; i < amount; i++) {
    const addBox = document.createElement('div');
    firstBoxSize += 10;
    addBox.style.height = firstBoxSize + "px"
    addBox.style.width = firstBoxSize + "px"
    addBox.style.backgroundColor = getRandomHexColor();
    refs.boxesList.append(addBox);
        
  }
}
  
function clearBoxes() {
  refs.boxesList.innerHTML = "";
}

  
// function createBoxes(amount) {
//   let firstBoxSize = 30;
//   for (let i = 0; i < amount; i++){
//     const addBox = document.createElement('div');
//     firstBoxSize += 10;
//     addBox.style.height = firstBoxSize + "px"
//     addBox.style.width = firstBoxSize + "px"
//     addBox.style.backgroundColor = getRandomHexColor();
//     refs.boxesList.append(addBox);
//   }
  
  
  
  

// createBtn.addEventListener('input', createBoxes)


// function clearBoxes() {
//   boxesList.innerHTML = " ";
// }


// function inputAmountChange(event) {
  
// }










// function createBoxes(amount) {

//   const addBox = document
//   // let divBoxesQuantity = `<div></div>` * amount;
//   // refs.boxesList.insertAdjacentHTML('afterbegin', divBoxesQuantity);
//   // refs.boxesList.style.backgroundColor = getRandomHexColor();


