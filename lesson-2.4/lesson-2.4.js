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
let screensValue = prompt('Типы экранов?', 'Шаблонные, с уникальным дизайном, с анимациями')
let screenPrice = 10000
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой сервис еще нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
let responsive = prompt('Нужен ли респонсивный сайт?', 'Да')
let fullPrice = screenPrice + servicePrice1 + servicePrice2

if (50000 => fullPrice) {
    console.log('делаем скидку в 10%');
} else if (20000 <= fullPrice <= 40000) {
    console.log('сделаем скидку 5%');
} else if (0 <= fullPrice <= 20000) {
    console.log('скидка не предусмотрена');
} else (fullPrice < 0) {
    console.log('Что то пошло не так');
}
