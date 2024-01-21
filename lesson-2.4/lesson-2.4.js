// let titleProject = 'Webflow+jsap'
// let screensValue = 'анимация, работа с кодом, 3D'
// let screenPrice = 800
// let percentage = 20
// let fullPrice = 400
// let responsive = true

// // // let x = 11;

// // // if (x > 10) {
// // //     console.log("Условие верно");
// // // } else {
// // //     console.log("Условие не верно");
// // // }

let titleProject = prompt('Название проекта?', 'Webflow+jsap')
let screensValue = prompt('Какой тип экрана?', 'Шаблонные, с уникальным дизайном, с анимациями')
let responsive = prompt('Нужен ли отзывчивы (responsive) сайт?')
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой сервис еще нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
let fullPrice = servicePrice1 + servicePrice2
let percent = 10 //процент подрядчику
let servicePercentPrice = fullPrice * (100 - percent) / 100;
servicePercentPrice = Math.round(servicePercentPrice * 100) / 100;
console.log(servicePercentPrice);

if (servicePercentPrice >= 50000) {
    console.log('делаем скидку в 10%');
} else if (servicePercentPrice >= 20000 && servicePercentPrice <= 40000) {
    console.log('сделаем скидку 5%');
} else if (servicePercentPrice >= 0 && servicePercentPrice <= 20000) {
    console.log('скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}
