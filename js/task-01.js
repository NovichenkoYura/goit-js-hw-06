const itemMasEl = document.querySelectorAll('li.item');
console.log('Number of categories:', itemMasEl.length);



itemMasEl.forEach((item) => console.log('Category:', item.firstElementChild.textContent, 
'Elements:', item.lastElementChild.children.length))
