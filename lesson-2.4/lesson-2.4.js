let titleProject = 'Webflow+jsap'
let screensValue = 'анимация, работа с кодом, 3D'
let screenPrice = 800
let percentage = 20
let fullPrice = 400
let responsive = true

// // let x = 11;

// // if (x > 10) {
// //     console.log("Условие верно");
// // } else {
// //     console.log("Условие не верно");
// // }

let titleProject = prompt('Название проекта?')
let screensValue = prompt('анимация, работа с кодом, 3D')
let responsive = prompt('нужен ли респонсивный сайт?')

let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = ('Сколько будет стоить этот второй сервис?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = fullPrice - 10 %;
