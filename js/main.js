// Получаем элементы из верстки
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


// Время
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Вывод времени
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Добавление нулей, когда минуты или секунды меньше нуля, 
// Пример: Вывод 11:2:4 (h, m, s), эта функция сделает 11:02:04
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Установка заднего фона в зависимости от времени суток
function setBg() {
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12){
        // Утро
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Доброе утро! ';
    } else if (hour < 17){
        // День
        document.body.style.backgroundImage = "url('../img/day.jpg')";
        greeting.textContent = 'Добрый день! ';
    } else if (hour < 22){
        // Вечер
        document.body.style.backgroundImage = "url('../img/sunset.jpg')";
        greeting.textContent = 'Добрый вечер! ';
    } else if (hour > 22 && hour << 4){
        // Ночь
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Доброй ночи! '
        document.body.style.color = 'white';
    }
}

// Получение имени
function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = ' [Введите свое имя :)]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keycode == 13){ // Enter = keycode 13.
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Blur - нажатие в любое место.
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

// Вызов главной функции
showTime();
setBg();
getName();