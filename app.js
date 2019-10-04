function description(id, name, src, price, weight) {
    this.id = id;
    this.name = name;
    this.src = src;
    this.price = price;
    this.weight = weight;
}

const firstDish = new description(1, "Хот-Дог куриный", "https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230", 79, 124);
const secondDish = new description(2, "Чизбургер Де Люкс", "https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230", 124, 226);

let hotDogPhotoEl = document.getElementById('photo-1');
let hotDogNameEl = document.getElementById('name-1');
let hotDogPriceEl = document.getElementById('price-1');
let hotDogWeightEl = document.getElementById('weight-1');

hotDogPhotoEl.src = firstDish.src;
hotDogNameEl.textContent = firstDish.name;
hotDogPriceEl.textContent = firstDish.price+' руб.';
hotDogWeightEl.textContent = firstDish.weight+' гр.';

hotDogPhotoEl = document.getElementById('photo-2');
hotDogNameEl = document.getElementById('name-2');
hotDogPriceEl = document.getElementById('price-2');
hotDogWeightEl = document.getElementById('weight-2');

hotDogPhotoEl.src = secondDish.src;
hotDogNameEl.textContent = secondDish.name;
hotDogPriceEl.textContent = secondDish.price+' руб.';
hotDogWeightEl.textContent = secondDish.weight+' гр.';