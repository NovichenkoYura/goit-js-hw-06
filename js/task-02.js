const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngridients = (ingredientElements) => {
  return ingredientElements.map(ingredientElement => {
    const ingredientsLi = document.createElement('li')
    ingredientsLi.classList.add('item');
    ingredientsLi.textContent = ingredientElement;

    return ingredientsLi;
  });
}

const ingredientElementsAdd = makeIngridients(ingredients);
ingredientsEl.append(...ingredientElementsAdd)
