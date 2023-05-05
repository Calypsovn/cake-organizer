const bases = [
  'Ванильный бисквит', 
  'Ванильный кексовый бисквит', 
  'Шоколадный бисквит', 
  'Морковный бисквит', 
  'Бисквит "красный бархат"', 
  'Лавандовый бисквит', 
  'Банановый бисквит'];
const fillings = [
  'Карамель', 
  'Клубника', 
  'Вишня', 
  'Малина', 
  'Смородина', 
  'Ягодный микс', 
  'Лимонный курд', 
  'Апельсиновый курд'];
const creams = [
  'Чиз на масле', 
  'Чиз на сливках', 
  'Пломбир', 
  'Шокодадный крем-чиз на масле', 
  'Шоколадный крем-чиз на сливках', 
  'Карамельный крем-чиз на масле', 
  'Карамельный крем-чиз на сливках'];

const classicCakes = [
    'Наполеон',
    'Медовик',
    'Киевский',
    'Эстерхази'
];

const vanilla = document.getElementById("vanilla");
// vanilla.innerText = bases[0];

const vanilla_cupcakes = document.getElementById("vanilla_cupcakes");
// vanilla_cupcakes.innerText = bases[1];

const chocolate = document.getElementById("chocolate");
// chocolate.innerText = bases[2];

const carrot = document.getElementById("carrot");
// carrot.innerText = bases[3];

const red_velvet = document.getElementById("red_velvet");
// red_velvet.innerText = bases[4];

const lavender = document.getElementById("lavender");
// lavender.innerText = bases[5];

const banana = document.getElementById("banana");
// banana.innerText = bases[6];

const caramel = document.getElementById("caramel");
// caramel.innerText = fillings[0];

const strawberry = document.getElementById("strawberry");
// strawberry.innerText = fillings[1];

const cherry = document.getElementById("cherry");
// cherry.innerText = fillings[2];

const raspberry = document.getElementById("raspberry");
// raspberry.innerText = fillings[3];

const blackcurrant = document.getElementById("blackcurrant");
// blackcurrant.innerText = fillings[4];

const berry_mix = document.getElementById("berry_mix");
// berry_mix.innerText = fillings[5];

const lemon_curd = document.getElementById("lemon_curd");
// lemon_curd.innerText = fillings[6];

const orange_curd = document.getElementById("orange_curd");
// orange_curd.innerText = fillings[7];

const butter_cream_cheese = document.getElementById("butter_cream_cheese");
// butter_cream_cheese.innerText = creams[0];

const cream_cheese = document.getElementById("cream_cheese");
// cream_cheese.innerText = creams[1];

const custard = document.getElementById("custard");
// custard.innerText = creams[2];

const chocolate_butter = document.getElementById("chocolate_butter");
// chocolate_butter.innerText = bases[3];

const chocolate_cream = document.getElementById("chocolate_cream");
// chocolate_cream.innerText = bases[4];

const caramel_butter = document.getElementById("caramel_butter");
// caramel_butter.innerText = bases[5];

const caramel_cream = document.getElementById("caramel_cream");
// caramel_cream.innerText = bases[6];

const cakeBases = document.getElementById('bases');
const cakeFillings = document.getElementById('fillings');
const cakeCreams = document.getElementById('creams');

// Добавляем обработчик событий к каждому родительскому элементу
[cakeBases, cakeFillings, cakeCreams].forEach(row => {
  row.addEventListener('click', event => {
    const clickedButton = event.target;
    const buttons = row.querySelectorAll('button');

    // Изменяем состояние всех остальных кнопок в этом ряду
    buttons.forEach(button => {
      if (button !== clickedButton) {
        button.disabled = true;
      }
    });
  });
});

carrot.addEventListener('click', function() {
  strawberry.disabled = true;
  cherry.disabled = true;
  raspberry.disabled = true;
  blackcurrant.disabled = true;
  berry_mix.disabled = true;
  lemon_curd.disabled = true;

  chocolate_butter.disabled = true;
  chocolate_cream.disabled = true;
});

red_velvet.addEventListener('click', function() {
  caramel.disabled = true;
  blackcurrant.disabled = true;
  berry_mix.disabled = true;
  lemon_curd.disabled = true;
  orange_curd.disabled = true;

  chocolate_butter.disabled = true;
  chocolate_cream.disabled = true;
  caramel_butter.disabled = true;
  caramel_cream.disabled = true;
});

lavender.addEventListener('click', function() {
  caramel.disabled = true;
  strawberry.disabled = true;
  cherry.disabled = true;
  raspberry.disabled = true;
  berry_mix.disabled = true;
  orange_curd.disabled = true;

  chocolate_butter.disabled = true;
  chocolate_cream.disabled = true;
  caramel_butter.disabled = true;
  caramel_cream.disabled = true;
});

banana.addEventListener('click', function() {
  strawberry.disabled = true;
  cherry.disabled = true;
  raspberry.disabled = true;
  blackcurrant.disabled = true;
  berry_mix.disabled = true;
  lemon_curd.disabled = true;
  orange_curd.disabled = true;
});

caramel.addEventListener('click', function() {
  red_velvet.disabled = true;
  lavender.disabled = true;
});

strawberry.addEventListener('click', function() {
  carrot.disabled = true;
  lavender.disabled = true;
  banana.disabled = true;

  caramel_butter.disabled = true;
  caramel_cream.disabled = true;
});

cherry.addEventListener('click', function() {
  carrot.disabled = true;
  lavender.disabled = true;
  banana.disabled = true;

  caramel_butter.disabled = true;
  caramel_cream.disabled = true;
});

raspberry.addEventListener('click', function() {
  carrot.disabled = true;
  lavender.disabled = true;
  banana.disabled = true;

  caramel_butter.disabled = true;
  caramel_cream.disabled = true;
});

blackcurrant.addEventListener('click', function() {
  carrot.disabled = true;
  red_velvet.disabled = true;
  banana.disabled = true;

  caramel_butter.disabled = true;
  caramel_cream.disabled = true;
});

berry_mix.addEventListener('click', function() {
  carrot.disabled = true;
  lavender.disabled = true;
  banana.disabled = true;

  caramel_butter.disabled = true;
  caramel_cream.disabled = true;
});

lemon_curd.addEventListener('click', function() {
  carrot.disabled = true;
  red_velvet.disabled = true;
  banana.disabled = true;
});

orange_curd.addEventListener('click', function() {
  lavender.disabled = true;
  red_velvet.disabled = true;
  banana.disabled = true;
});