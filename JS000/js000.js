/*
const array = ['HTML', 'CSS', 'Javascript']; //Создает массив array и добавляем значения
const newarray = new Array(1, 2, true); //Создает массив newarray
console.log(typeof array + ' ' + typeof newarray) //Возвращает тип данных, в данном случае: object object
newarray[3] = 'Hello!' //Добавляет элемент в массив (нумерация с 0)
console.log(array + '\n' + newarray);
console.log(newarray[3] + ' ' + array[2]);
console.log(newarray.length); //Возвращает длину массива
*/
/*
const array = [0, 1, {name: 'Vasya'}]; //Объект внутри массива
array[2].age = 38; //Добавляет ключи в объект "2" внутри массива "array"
array[2].item = 'unit';

array.push('css', 'debug'); //Добавляет значения в конец массива
console.log(array[2].name + ' ' + array[2].age + ' ' + array[2].item + ' >> ' + array);

const narray = [];
for (let i = 0; i<5; i++){ //Цикл добавляет в массив 5 значений
    narray.push("New: " + i);
    console.log(narray[i]);
};
console.log(narray);

const array000 = ['Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
const deleted = array000.pop(); //Удаляет последнее значение из массива и присваевает его переменной "deleted" 
console.log(deleted); //Olya
console.log(array000); //Array(5) ["Vasya", "Petya", "Masha", "Gena", "Dima"]
array000.unshift('Filya', 'Natasha'); //Добавляет этементы в начало массиваы 
console.log(array000); //Array(7) ["Filya", "Natasha", "Vasya", "Petya", "Masha", "Gena", "Dima"]
const deleted2 = array000.shift(); //Удаляет первое значение из массива и присваевает его переменной "deleted2" 
console.log(deleted2); //Filya
console.log(array000); //Array(6) ["Natasha", "Vasya", "Petya", "Masha", "Gena", "Dima"]
const joined = array000.join(' -- '); //Преобразует массив в строку с разделителем " -- "
console.log(joined); //Filya -- Natasha -- Vasya -- Petya -- Masha -- Gena -- Dima
const names = 'Vasya, Petya, Masha';
const array001 = names.split(', '); //Создает массив из строки отбрасывая разделители в скобках
console.log(array001); //Array(3) ["Vasya", "Petya", "Masha"]

const array002 = ['Filya', 'Natasha', 'Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
let name01 = array002.slice(3); //Создает массив "name01" и копирует туда элементы массива "array000" с 3 элемента до конца
console.log(name01); //["Petya", "Masha", "Gena", "Dima", "Olya"]
let name02 = array002.slice(1, 3); //Создает массив "name01" и копирует туда элементы массива "array000" с 1 (вкл) по 3 (не вкл)
console.log(name02); //["Natasha", "Vasya"]
let name03 = array002.slice(1, -1); //Создает массив "name01" и копирует туда элементы массива "array000" с 1 по предпоследний (вкл)
console.log(name03); //["Natasha", "Vasya", "Petya", "Masha", "Gena", "Dima"]
let name04 = array002.slice(-6, -2); //Создает массив "name01" и копирует туда элементы массива "array000" с 6 с конца по 2 с конца
console.log(name04); //["Vasya", "Petya", "Masha", "Gena"]

*/
/*
const array003 = ['Filya', 'Natasha', 'Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
let arr001 = array003.splice(2, 5); //Вырезает (с удалением) из массива array003 5 элементов начиная со 2 и помещает в массив arr001
console.log(array003 + '\n' + arr001)

const array004 = ['Filya', 'Natasha', 'Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
let arr002 = array004.splice(2, 2, 'Serega', 'Alesha'); //Вставляет вместо двух элементов начиная со второго новые элементы, удаленные элементы присваивает arr002
console.log(array004 + '\n' + arr002);

const array005 = ['Filya', 'Natasha', 'Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
array005.splice(2, 0, 'Serega', 'Alesha'); //Вставляет два новых элемента после второго
console.log(array005); //["Filya", "Natasha", "Serega", "Alesha", "Vasya", "Petya", "Masha", "Gena", …]

const array006 = ['Filya', 'Natasha', 'Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
array006.reverse(); //Сортирует элементы массива в обратном порядке
console.log(array006); //Olya,Dima,Gena,Masha,Petya,Vasya,Natasha,Filya

const ar001 = ['Filya', 'Natasha', 'Vasya'];
const ar002 = ['Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
let array007 = ar001.concat(ar002); //Объединяет два массива в третьем
console.log(array007); //["Filya", "Natasha", "Vasya", "Petya", "Masha", "Gena", "Dima", "Olya"]

const array008 = ['Filya', 'Natasha', 'Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
console.log(array008.indexOf('Olya')); //Ищет заданный элемент в массиве (начиная с начала) и возвращает его номер
console.log(array008.lastIndexOf('Olya')); //Ищет заданный элемент в массиве (начиная с конца) и возвращает его номер
console.log(array008.indexOf('Vova')); //Если элемента в массиве нет, возвращает "-1" фммукпа 

const array009 = ['Filya', 'Vasya', 'Petya', 'Masha', 'Gena', 'Dima', 'Olya'];
const spred000 = [...array009]; //Копирует массив
const spred001 = ['Stepa', ...array009, 'Valera']; //Создает новый массив и встраивает в него массив "arrau009"
console.log(spred000 + '\n' + spred001);
//document.write(spred000 + '\n' + spred001);

const array010 = ['Filya', 'Vasya', 'Petya'];
let [i01, i02, i03] = array010; //Перезает переменным соответствующие значения из масиива
console.log(i01 + i02 + i03); //FilyaVasyaPetya
*/
/*
const array01 = ['Filya', 'Vasya', 'Petya'];
for (let value of array01){
    console.log(value); //Перебирает все элементы массива
}
array01.forEach(function(i, j){
    console.log(`Index: ${j}, Item: ${i}`); //Перебирает все элементы массива, где i - элемент, а j - индекс
});
array01.forEach((i, j) => {
    console.log(`Index: ${j}, Item: ${i}`); //Перебирает все элементы массива, где i - элемент, а j - индекс
});
let arr01 = array01.map(i => { //Перебирает все элементы массива и заносит их в новый массив с изменениями
     return `Current name is ${i}`
});
arr01.forEach(i => {
    console.log(i);
});

let array02 = ['Vasia', 2, true, 'Petya', null, 'Masha']
let arr02 = array02.filter(i => {
    return typeof i === 'string'
}); //Перебирает все элементы массива и заносит их в новый массив с фильтрацией по типу данных
arr02.forEach(i => {
   console.log(i);
});

let array03 = ['Vasia', 2, true, 'Petya', null, 'Masha']
let result00 = array03.some(i => typeof i === 'string'); //Перебирает все элементы массива, если хоть одно соответствует условию, возвращает булиевое значение true
   console.log(result00);
let array04 = [1, 2, 3, 4, 5, 6]
let result01 = array04.every(i => i <= 6); //Перебирает все элементы массива, если все соответствуют условию, возвращает булиевое значение true
   console.log(result01);

let array05 = [1, 2, 3, 4, 5, 6]
let sum = array04.reduce((resault, number) => {return number + resault}, 0); //Вычисляет сумму всех элементов массива
   console.log(sum);   
*/
/*
<<<<<<< ГЕНЕРАТОР СЛУЧАЙНЫХ ЧИСЕЛ ! >>>>>>>
function random(b){ //Получение случайного числа
    let ct = new Date();
    let a = ct.getTime();
    a = String(a);
    a = a.slice(-b);
    a = Number(a);
    return a
}
let i = random(3)

if (i % 2){
    console.log('Yes')
    } else{console.log('No')};

let b = 23.443346;


/*
<<<<<<< МАТЕМАТИЧЕСКИЕ ФУНКЦИИ ! >>>>>>>

console.log(Math.round(b)); //Округляет число до целого
console.log(Math.floor(b)); //Округляет число в меньшую сторону
console.log(Math.ceil(b)); //Округляет число в большую сторону
console.log(Math.max(23, 45, 26, 76, 45)); //Выбирает большее число
console.log(Math.min(23, 45, 26, 76, 45)); //Выбирает меньшее число
 

/*
<<<<<<< ШАБЛОННЫЕ ПЕРЕМЕННЫЕ ! >>>>>>>

const text001 = 'Make America \ngreat again!'//Перенос строки в переменной
console.log(text001);

console.log(text001.length); //Выдает длину строки

const lower = text001.toLowerCase(); //Все буквы строчные
const upper = text001.toUpperCase(); //Все буквы прописные
console.log(lower + '\n' + upper);

let text002 = 'Make America great again!';
let word001 = 'great';
let pos001 = text002.indexOf(word001); //Выдает позицию слова в строке (ВЕЗДЕ нумерация с 0)
console.log(pos001); //Если слово не найдено, результат "-1"
let pos002 = text002.indexOf('a', 10); //Выдает позицию слова в строке начиная поиск с 10 символа
console.log(pos002); //Если слово не найдено, результат "-1"
let pos003 = text002.lastIndexOf('again'); //Выдает позицию слова в строке начиная поиск с конца
console.log(pos003); //Если слово не найдено, результат "-1"
let pos004 = text002.lastIndexOf('a', 18); //Выдает позицию слова в строке начиная поиск с 18 символа в обратном направлении
console.log(pos004); //Если слово не найдено, результат "-1"

let text005 = '  great again  ';
let trimtext001 = text005.trim();//Убирает пробелы в начале и в конце строки
console.log(text005 + ': ' + text005.length);
console.log(trimtext001 + ': ' + trimtext001.length);

let text006 = 'Make America great again!';
let sustr01 = text006.substr(5, 7);//Назначает переменной значение строки начиная с 5 символа, длиной 7 символов
console.log(sustr01);
let sustr02 = text006.substr(5);//Назначает переменной значение строки начиная с 5 символа до конца
console.log(sustr02);
let sustr03 = text006.substring(5, 12);//Назначает переменной значение строки с 5 (включительно) по 12 символ (не включительно)
//Если аргумент отрицательный, он интерпретируется, как 0. Если второй аргумент меньше первого, они меняются местами
console.log(sustr03);
let sustr04 = text006.substring(5);//Назначает переменной значение строки начиная с 5 символа до конца
console.log(sustr04);
let sustr05 = text006.slice(-6);//Назначает переменной значение строки с 6 символа с конца строки
console.log(sustr05);
let sustr06 = text006.slice(5, -7);//Назначает переменной значение строки начиная с 5 символа до 7 c конца строки
console.log(sustr06);

let text007 = 'Make America great again!';
let spl001 = text006.split(' ');//разделяет строку на массив подстрок по указанному разделителю
console.log(spl001); //["Make", "America", "great", "again!"]

let t001 = 'Make America';
let t002 = 'great again!';
let t003 = 'Trump:';
let text008 = t003.concat(' ', t001, ' ', t002); //Соединяет несколько строк в одну
console.log(text008); // Trump: Make Avtrica great again!

let p001 = 'very';
let te001 = `Life is ${p001} good`; //Шаблонная строка (вставляет переменную или функцию в строку) записывается с помощью косых ковычек "`"
console.log(te001);
function word100(p001){
    let word101 = `${p001} good`
    return word101
} //В шаблонных строках перенос строки передается без использования дополнительных символов
console.log(`Life is 
${word100(p001)}!`); //Пример встраивания функции в шаблонную строку

const currentdate = new Date(); //назначает переменной день недели, дату, время и часовой пояс
console.log(currentdate); //Wed Feb 12 2020 18:09:58 GMT+0300 (GMT+03:00) {}
console.log(currentdate.getFullYear()); //Возвращает текущий год в 4-х цифрах 
//Также можно использовать: getMonth()(январь 0, декабрь 11), getDate(). getHours(), getMinutes(), getSeconds(), getMilliseconds()




let num = 16784.6538 // Оставляем в числе два знака после запятой 
function num1(num){
    num = String(num);
    let a = num.indexOf('.');
    numb = num.substr(0, a)
    num = num.substr(a, 3)
    numb = Number(numb)
    num = Number(numb + num)
    return (num)
};
console.log(num1(num))
*/
/*
function sum(a, b) {
    var i = 0;
    for(i; i<10; i++) {
        a += b
    };
    return (a);
};
console.log("Hello");
let obj = {
    a1: 20,
    a2: 30,
    Alex: {
        name: 'Alexandr',
        age: 19,
        rel: 'Buddism',
    },
};
function inobj(login, data){
let key;
for(key in obj){
    if (login == key){
        return obj[key][data]
        };
    };

}
let nm = 'Alex'
let dt = 'rel'
let date = inobj(nm, dt);
console.log(date);
console.log(obj[nm][dt]);
//let c = sum(+obj.a1, +obj.a2);
//console.log(c);
*/
/*
let prod = {
    fruit: 'orange',
    form: 'sphere',
    };
let prod2 = {
    berry: 'cherry',
    smell: 'good',
    };
let allprod = Object.assign({}, prod, prod2); //Объединяем два объекта в третий
for (key in prod){
    delete prod[key]
};
for (item in allprod){
    console.log('thing: ' + item + ', property: ' + allprod[item])
};
console.log(allprod)
let {berry: br, smell: sm} = prod2; //Присваивает перемнным (br и sm) значения свойств (berry, smell) объекта prod2
console.log(br + ', ' + sm)
*/

