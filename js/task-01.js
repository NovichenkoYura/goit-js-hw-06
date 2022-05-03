const quantityLiEl = document.querySelectorAll('li.item');
console.log('Number of categories:', quantityLiEl.length);

const categoriesEl = document.querySelector('#categories');

const animalItem = categoriesEl.children[0];
console.log('Category:', animalItem.children[0].textContent);

const animalQuantity = animalItem.querySelectorAll('li');
console.log('Elements: ', animalQuantity.length);

const productItem = categoriesEl.children[1];
console.log('Category:', productItem.children[0].textContent);

const productQuantity = productItem.querySelectorAll('li');
console.log('Elements: ', productQuantity.length);

const technologiesItem = categoriesEl.children[2];
console.log('Category:', technologiesItem.children[0].textContent);

const technologiesQuantity = technologiesItem.querySelectorAll('li');
console.log('Elements: ', technologiesQuantity.length);



