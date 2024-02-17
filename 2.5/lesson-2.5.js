let screenPrice = 10000
let percent = 10 //процент подрядчику

let titleProject = prompt('Название проекта?', 'Webflow+jsap')
let screensValue = prompt('Какой тип экрана?', 'Шаблонные, с уникальным дизайном, с анимациями')
let responsive = prompt('Нужен ли отзывчивы (responsive) сайт?')
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой сервис еще нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
let getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice() {
    return allServicePrices + screenPrice;
}

let fullPrice = getFullPrice();

function getServicePercentPrices() {
    let servicePercentPrice = fullPrice * (100 - percent) / 100;
    servicePercentPrice = Math.round(servicePercentPrice * 100) / 100;
    return servicePercentPrice;
}
let servicePercentPrice = getServicePercentPrices();

function getTitle(title) {
    title = title.trim();
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

titleProject = getTitle(titleProject);

function getRollbackMessage() {
    if (fullPrice >= 40000) {
        return ('Делаем скидку в 10%');
    } else if (fullPrice >= 20000 && fullPrice <= 40000) {
        return ('Сделаем скидку 5%');
    } else if (fullPrice >= 0 && fullPrice <= 20000) {
        return ('Скидка не предусмотрена');
    } else {
        return ('Что то пошло не так');
    }
}

console.log(titleProject);
console.log('Тип проекта:', screensValue);
console.log('Отзывчивость дизайна:', responsive);
console.log('Первый сервис:', service1);
console.log('Цена за первый сервис:', servicePrice1);
console.log('Второй сервис:', service2);
console.log('Цена за второй сервис:', servicePrice2);
console.log('Цена за сервисы:', allServicePrices);
console.log('Сумма после вычета процента подрядчику:', servicePercentPrice);
console.log('Общая цена:', fullPrice);
console.log(getRollbackMessage());