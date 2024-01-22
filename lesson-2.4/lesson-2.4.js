// let titleProject = 'Webflow+jsap'
// let screensValue = 'анимация, работа с кодом, 3D'
// let screenPrice = 800
// let percentage = 20
// let fullPrice = 400
// let responsive = true

let titleProject = prompt('Название проекта?', 'Webflow+jsap')
let screenPrice = 10000
let screensValue = prompt('Какой тип экрана?', 'Шаблонные, с уникальным дизайном, с анимациями')
let responsive = prompt('Нужен ли отзывчивы (responsive) сайт?')
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой сервис еще нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let percent = 10 //процент подрядчику
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
