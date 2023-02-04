const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('ul#ingredients');

let fragment = new DocumentFragment();

for (const value of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent += value;
  fragment.appendChild(itemEl);
}

listEl.append(fragment);