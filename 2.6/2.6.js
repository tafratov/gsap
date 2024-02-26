let screenPrice = 10000
let percent = 10 //процент подрядчику

let titleProject = prompt('Название проекта?', 'Webflow+jsap')
let screensValue = prompt('Какой тип экрана?', 'Шаблонные, с уникальным дизайном, с анимациями')
let responsive = prompt('Нужен ли отзывчивы (responsive) сайт?')
let service1;
let service2;



function getTitle(title) {
    title = title.trim();
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

titleProject = getTitle(titleProject);



const checkIsNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number)
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let service;
        if (i === 0) {
            service = prompt('Какой дополнительный сервис нужен?', 'Услуга 1');
        } else if (i === 1) {
            service = prompt('Какой дополнительный сервис нужен?', 'Услуга 2');
        }

        let textFromPrompt = '';

        while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === '' || textFromPrompt === null) {
            textFromPrompt = prompt('Сколько будет стоить?');
        }

        sum += Number(textFromPrompt);
    }
    return sum;
};


let allServicePrices = getAllServicePrices();

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



console.log('Название проекта:', titleProject);
console.log('Цена проекта:', screensValue);
console.log('Отзывчивый сайт?', responsive);
console.log('Сумма всех дополнительных сервисов:', allServicePrices);
console.log('Сумма после вычета процента подрядчику:', servicePercentPrice);
console.log('Общая цена:', fullPrice);
console.log(getRollbackMessage());