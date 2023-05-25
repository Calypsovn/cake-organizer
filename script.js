const data = [ 
  {
    id: 'vanilla',
    flavors: ['vanilla', 'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream', 'caramel_butter', 'caramel_cream'],
  },
  {
    id: 'vanilla_cupcakes',
    flavors: ['vanilla_cupcakes', 'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream', 'caramel_butter', 'caramel_cream'],
  },
  {  id: 'chocolate',
    flavors: ['chocolate', 'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream', 'caramel_butter', 'caramel_cream'],
  },
  {  id: 'carrot',
    flavors: ['carrot', 'caramel', 'orange_curd',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'caramel_butter', 'caramel_cream'],
  },
  {
    id: 'red_velvet',
    flavors: ['red_velvet', 'strawberry', 'cherry', 'raspberry',
    'butter_cream_cheese', 'cream_cheese'],
  },
  {
    id: 'lavender',
    flavors: ['lavender', 'blackcurrant', 'lemon_curd',
    'butter_cream_cheese', 'cream_cheese'],
  },
  {
    id: 'banana',
    flavors: ['banana', 'caramel',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream', 'caramel_butter', 'caramel_cream'],
  },
  {
    id: 'caramel',
    flavors: ['caramel', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'carrot', 'banana',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream', 'caramel_butter', 'caramel_cream'],
  },
  {
    id: 'strawberry',
    flavors: ['strawberry', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'red_velvet',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream'],
  },
  {
    id: 'cherry',
    flavors: ['cherry', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'red_velvet',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream'],
  },
  {
    id: 'raspberry',
    flavors: ['raspberry', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'red_velvet',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream'],
  },
  {
    id: 'blackcurrant',
    flavors: ['blackcurrant', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'lavender',
    'butter_cream_cheese', 'cream_cheese', 'chocolate_butter', 'chocolate_cream'],
  },
  {
    id: 'berry_mix',
    flavors: ['berry_mix', 'vanilla', 'vanilla_cupcakes', 'chocolate',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream'],
  },
  {
    id: 'lemon_curd',
    flavors: ['lemon_curd', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'lavender',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream'],
  },
  {
    id: 'orange_curd',
    flavors: ['orange_curd', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'carrot',
    'butter_cream_cheese', 'cream_cheese', 'custard', 'chocolate_butter', 'chocolate_cream', 'caramel_butter', 'caramel_cream'],
  },
  {
    id: 'butter_cream_cheese',
    flavors: ['butter_cream_cheese', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'carrot', 'red_velvet', 'lavender', 'banana',
    'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd'],
  },
  {
    id: 'cream_cheese',
    flavors: ['cream_cheese', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'carrot', 'red_velvet', 'lavender', 'banana',
    'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd'],
  },
  {
    id: 'custard',
    flavors: ['custard', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'carrot', 'banana',
    'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd'],
  },
  {
    id: 'chocolate_butter',
    flavors: ['chocolate_butter', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'banana',
    'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd'],
  },
  {
    id: 'chocolate_cream',
    flavors: ['chocolate_cream', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'banana',
    'caramel', 'strawberry', 'cherry', 'raspberry', 'blackcurrant', 'berry_mix', 'lemon_curd', 'orange_curd'],
  },
  {
    id: 'caramel_butter',
    flavors: ['caramel_butter', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'carrot', 'banana',
    'caramel', 'orange_curd'],
  },
  {
    id: 'caramel_cream',
    flavors: ['caramel_cream', 'vanilla', 'vanilla_cupcakes', 'chocolate', 'carrot', 'banana',
    'caramel', 'orange_curd'],
  },
];

// Получение всех кнопок
const buttons = document.getElementsByTagName('button');

// Обработчик события для кнопок
function buttonClickHandler() {
  const clickedButtonId = this.id;

  // Поиск объекта с соответствующим идентификатором
  const clickedObject = data.find(obj => obj.id === clickedButtonId);

  // Если объект не найден, выход из функции
  if (!clickedObject) {
    return;
  }

  // Получение всех строк во всех объектах
  const allFlavors = data.reduce((acc, obj) => {
    return acc.concat(obj.flavors);
  }, []);

  // Получение уникальных строк
  const uniqueFlavors = Array.from(new Set(allFlavors));

  // Проход по всем кнопкам и установка атрибута `disabled` в зависимости от соответствия строк
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const buttonId = button.id;

    // Проверка, содержит ли объект с кнопкой соответствующую строку
    const isMatch = clickedObject.flavors.includes(buttonId);

    // Если строка не соответствует, делаем кнопку неактивной
    if (!isMatch) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
}

// Назначение обработчика события для каждой кнопки
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClickHandler);
} 