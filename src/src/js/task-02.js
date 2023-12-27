const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const lastItem = document.createElement("li");
  lastItem.textContent = ingredients[i];
  list.append(lastItem);
  console.log(lastItem.innerHTML);
}
