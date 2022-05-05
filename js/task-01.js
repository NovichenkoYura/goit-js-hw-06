const itemMasEl = document.querySelectorAll('li.item');
console.log('Number of categories:', itemMasEl.length);

// for (let i = 0; i < itemMasEl.length; i += 1){
//     // console.log(itemMasEl[i].firstElementChild.textContent);
//     console.log(itemMasEl[i].lastElementChild);
// }


itemMasEl.forEach((item) => console.log('Category:', item.firstElementChild.textContent, 
'Elements:', item.lastElementChild.children.length))


// item.lastElementChild.length

// const categoriesEl = document.querySelector('#categories');

// const animalItem = categoriesEl.children[0];
// console.log('Category:', animalItem.children[0].textContent);

// const animalQuantity = animalItem.querySelectorAll('li');
// console.log('Elements: ', animalQuantity.length);

// const productItem = categoriesEl.children[1];
// console.log('Category:', productItem.children[0].textContent);

// const productQuantity = productItem.querySelectorAll('li');
// console.log('Elements: ', productQuantity.length);

// const technologiesItem = categoriesEl.children[2];
// console.log('Category:', technologiesItem.children[0].textContent);

// const technologiesQuantity = technologiesItem.querySelectorAll('li');
// console.log('Elements: ', technologiesQuantity.length);



