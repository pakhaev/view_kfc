function Description(id, name, src, description, kcal, proteins, fats, carbohydrates, price, weight) {
    this.id = id;
    this.name = name;
    this.src = src;

    this.description = description;
    this.kcal = kcal;
    this.proteins = proteins;
    this.fats = fats;
    this.carbohydrates = carbohydrates;
    
    this.price = price;
    this.weight = weight;
}

const firstDish = new Description(1, "Хот-Дог куриный", "https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230", "Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.", 226, 9.6, 10.1, 24.3, 79, 124);
const secondDish = new Description(2, "Чизбургер Де Люкс", "https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230", "Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.", 193, 12.6, 6.6, 20.7, 124, 226);

let hotDogPhotoEl = document.getElementById('photo-1');
let hotDogNameEl = document.getElementById('name-1');
let hotDogDescriptionEl = document.getElementById('description-1');
let hotDogKcalEl = document.getElementById('kcal-1');
let hotDogPfcEl = document.getElementById('PFC-1');
let hotDogPriceEl = document.getElementById('price-1');
let hotDogWeightEl = document.getElementById('weight-1');

hotDogPhotoEl.src = firstDish.src;
hotDogNameEl.textContent = firstDish.name;
hotDogDescriptionEl.textContent = firstDish.description;
hotDogKcalEl.textContent = firstDish.kcal + " Ккал";
hotDogPfcEl.textContent = "Б: " + firstDish.proteins + " Ж: " + firstDish.fats + " У: " + firstDish.carbohydrates;
hotDogPriceEl.textContent = firstDish.price+' руб.';
hotDogWeightEl.textContent = firstDish.weight+' гр.';

hotDogPhotoEl = document.getElementById('photo-2');
hotDogNameEl = document.getElementById('name-2');
hotDogDescriptionEl = document.getElementById('description-2');
hotDogKcalEl = document.getElementById('kcal-2');
hotDogPfcEl = document.getElementById('PFC-2');
hotDogPriceEl = document.getElementById('price-2');
hotDogWeightEl = document.getElementById('weight-2');

hotDogPhotoEl.src = secondDish.src;
hotDogNameEl.textContent = secondDish.name;
hotDogDescriptionEl.textContent = secondDish.description;
hotDogKcalEl.textContent = secondDish.kcal + " Ккал";
hotDogPfcEl.textContent = "Б: " + secondDish.proteins + " Ж: " + secondDish.fats + " У: " + secondDish.carbohydrates;
hotDogPriceEl.textContent = secondDish.price+' руб.';
hotDogWeightEl.textContent = secondDish.weight+' гр.';