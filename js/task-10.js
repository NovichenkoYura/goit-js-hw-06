function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxesList: document.querySelector('.boxes'),
  inputAmount: document.querySelector('input')

} 

let firstBoxSize = 30;

function createBoxes(amount) {
  
  for (let i = 0; i < amount; i++){
    const addBox = document.createElement('div');
    firstBoxSize += 10;
    addBox.style.height = firstBoxSize + "px"
    addBox.style.width = firstBoxSize + "px"
    addBox.style.backgroundColor = getRandomHexColor();
    refs.boxesList.append(addBox)
  }
  
}

inputAmount.addEventListener('input', createBoxes)


// function inputAmountChange(event) {
  
// }










// function createBoxes(amount) {

//   const addBox = document
//   // let divBoxesQuantity = `<div></div>` * amount;
//   // refs.boxesList.insertAdjacentHTML('afterbegin', divBoxesQuantity);
//   // refs.boxesList.style.backgroundColor = getRandomHexColor();


