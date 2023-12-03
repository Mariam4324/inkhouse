const cards = [
  {
    url: "../img/marsel@2x.webp",
    author: "Марсель Руссо",
    name: "Охота Амура",
    materials: "Холст, масло (50х80)",
    price: "14 500 руб",
    btn: "В корзину",
  },
  {
    url: "../img/anri@2x.webp",
    author: "Анри Селин",
    name: "Дама с собачкой",
    materials: "Акрил, бумага (50х80)",
    price: "16 500 руб",
    btn: "В корзину",
  },
  {
    url: "../img/fransua@2x.webp",
    author: "Франсуа Дюпон",
    name: "Процедура",
    materials: "Цветная литография (40х60)",
    price: "20 000 руб",
    btn: "В корзину",
  },
  {
    url: "../img/curt@2x.webp",
    author: "Курт Вернер",
    name: "Над городом",
    materials: "Цветная литография (40х60)",
    price: "16 000 руб",
    btn: "В корзину",
  },
  {
    url: "../img/max@2x.webp",
    author: "Макс Рихтер",
    name: "Птенцы",
    materials: "Холст, масло (50х80)",
    price: "14 500 руб",
    btn: "В корзину",
  },
  {
    url: "../img/martin@2x.webp",
    author: "Мартин Майер",
    name: "Среди листьев",
    materials: "Цветная литография (40х60) Цветная литография (40х60)",
    price: "20 000 руб",
    btn: "В корзину",
  },
  {
    url: "../img/paul@2x.webp",
    author: "Пол Смит",
    name: "Дикий зверь",
    materials: "Акварель, бумага (50х80)",
    price: "19 500 руб",
    btn: "В корзину",
  },
  {
    url: "../img/john@2x.webp",
    author: "Джон Уайт",
    name: "Скалистый берег",
    materials: "Цветная литография (40х60)",
    price: "17 500 руб",
    btn: "В корзину",
  },
  {
    url: "../img/jim@2x.webp",
    author: "Джим Уотсон",
    name: "Река и горы",
    materials: "Акварель, бумага (50х80)",
    price: "20 500 руб",
    btn: "В корзину",
  },
];

cards.forEach((obj) => {
  let slider = document.querySelector(".repro__slider");
  slider.append(createCard(obj));
});

function createCard(obj) {
  let card = document.createElement("div");
  let image = document.createElement("img");
  let author = document.createElement("div");
  let name = document.createElement("div");
  let materials = document.createElement("p");
  let price = document.createElement("div");
  let button = document.createElement("button");

  card.className = "repro__card";
  image.className = "repro__img";
  author.className = "repro__author";
  name.className = "repro__name";
  materials.className = "repro__material";
  price.className = "repro__price";
  button.classList.add("btn", "repro__btn");

  image.textContent = obj.url;
  image.src = obj.url;
  image.alt = "picture";
  author.textContent = obj.author;
  name.textContent = obj.name;
  materials.textContent = obj.materials;
  price.textContent = obj.price;
  button.textContent = obj.btn;

  card.append(image, author, name, materials, price, button);

  return card;
}
