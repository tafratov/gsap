// let titleProject = 'Webflow+jsap'
// let screensValue = 'анимация, работа с кодом, 3D'
// let screenPrice = 800
// let percentage = 20
// let fullPrice = 400
// let responsive = true


let screenPrice = 10000
let percent = 10 //процент подрядчику

let titleProject = prompt('Название проекта?', 'Webflow+jsap')
console.log(titleProject);

let screensValue = prompt('Какой тип экрана?', 'Шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt('Нужен ли отзывчивы (responsive) сайт?')
console.log(responsive);

let service1 = prompt('Какой сервис нужен?')
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(servicePrice1);

let service2 = prompt('Какой сервис еще нужен?')
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice);

let servicePercentPrice = fullPrice * (100 - percent) / 100;
servicePercentPrice = Math.round(servicePercentPrice * 100) / 100;
console.log(servicePercentPrice);

if (fullPrice >= 40000) {
    console.log('делаем скидку в 10%');
} else if (fullPrice >= 20000 && fullPrice <= 40000) {
    console.log('сделаем скидку 5%');
} else if (fullPrice >= 0 && fullPrice <= 20000) {
    console.log('скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}