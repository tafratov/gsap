let screenPrice = 10000
let percent = 10 //процент подрядчику

let titleProject = prompt('Название проекта?', 'Webflow+jsap')
console.log('Название проекта:', titleProject);

let screensValue = prompt('Какой тип экрана?', 'Шаблонные, с уникальным дизайном, с анимациями')
console.log('Тип проекта:', screensValue);

let responsive = prompt('Нужен ли отзывчивы (responsive) сайт?')
console.log('Отзывчивость дизайна:', responsive);

let service1 = prompt('Какой сервис нужен?')
console.log('Первый сервис:', service1);

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log('Цена за первый сервис:', servicePrice1);

let service2 = prompt('Какой сервис еще нужен?')
console.log('Второй сервис:', service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log('Цена за второй сервис:', servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log('Общая цена:', fullPrice);

let getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
console.log(allServicePrices);

function getFullPrice() {
    return allServicePrices + screenPrice;
}

let fullProjectPrice = getFullPrice();
console.log(fullProjectPrice);


function getTitle(title) {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

titleProject = getTitle(titleProject);
console.log(titleProject);


function getServicePercentPrices() {
    fullPrice * (100 - percent) / 100;
    servicePercentPrice = Math.round(servicePercentPrice * 100) / 100;
    console.log('Сумма,с учетом вычета процента подрядчику:', servicePercentPrice);
}

function getRollbackMessage() {
    if (fullPrice >= 40000) {
        console.log('делаем скидку в 10%');
    } else if (fullPrice >= 20000 && fullPrice <= 40000) {
        console.log('сделаем скидку 5%');
    } else if (fullPrice >= 0 && fullPrice <= 20000) {
        console.log('скидка не предусмотрена');
    } else {
        console.log('Что то пошло не так');
    }
}