// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);


// Задание 2

const firstIphoneYear = 2007;
alert(`Год выпуска первого iPhone - ${firstIphoneYear}`);

// Задание 3

const languageCreator = "Брендан Эйх"
alert(`Созадетль языка JavaScript - ${languageCreator}`);

// Задание 4

let x = 10;
let y = 2;
alert  (`${x + y} ${x - y} ${x * y} ${x / y}`);

// Задание 5

let exponentiation = 2;
let result = exponentiation**5;
alert(result);

// Задание 6

let b = 9;
let c = 2;
alert(`${b % c}`);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num)

// Задание 8

let age = prompt(`Сколько вам лет?`);
alert(age);

// Задание 9

let user = {
    name: 'Александр',
    age: 28,
    isAdmin: true       
};
user.cityOfResidence = 'Новосибирск';
user.age = 35;
delete user.cityOfResidence;
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(info[user]);

// Задание 10

let userName = prompt(`Как тебя зовут?`);
alert (`Привет, ${userName}!`);