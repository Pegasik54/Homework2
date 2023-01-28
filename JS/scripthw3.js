// Задание 1

let password = String(prompt(`Введите пароль`));
if (password === `пароль` || password === `Пароль`) {
    alert(`Пароль введен верно`);
} else {
    alert(`Пароль введен неправильно`);
}

// Задание 2

let c = 6;
if (c > 0 && c < 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}


// Задание 3

let d = 21;
let e = 105;
if (d > 100 || e > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

// Задание 4

let a = 2;
let b = Number('3');
console.log(a + b);

// Задание 5

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log( 'Зима' );
        break;

    case 3:
    case 4:
    case 5:
        console.log( 'Весна' );
        break;

    case 6:
    case 7:
    case 8:
        console.log( 'Лето' );
        break;

    case 9:
    case 10:
    case 11:
       console.log( 'Осень' );
        break;
    default:console.log( 'В году 12 месяцев' );
        
}

