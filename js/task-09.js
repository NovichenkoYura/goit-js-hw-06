function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyBgc: document.querySelector('.widget'),
  onChangeColorBtn: document.querySelector('.change-color'),
  onChangeColorText: document.querySelector('.color'),

};

refs.onChangeColorBtn.addEventListener('click', onClickChangeColor);

function onClickChangeColor() {
  refs.bodyBgc.style.backgroundColor = getRandomHexColor();
  refs.onChangeColorText.textContent = getRandomHexColor();

}

