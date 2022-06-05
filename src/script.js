import data from '../data.json';

const currentHours = document.querySelectorAll('.container__item__hours');
const previousHours = document.querySelectorAll('.container__item__hours--week');
const btnDaily = document.querySelector('.btn-daily');
const btnWeekly = document.querySelector('.btn-weekly');
const btnMonthly = document.querySelector('.btn-monthly');

console.log(data[0].timeframes.daily);
console.log(currentHours[0])



const appendDailyHours = () => {
    for (let i = 0, j = 0; i < currentHours.length || previousHours.length, j < data.length; i++, j++) {
        currentHours[i].innerText = `${data[j].timeframes.daily.current}hrs`;
        previousHours[i].innerText = `Last Week - ${data[j].timeframes.daily.previous} hrs`;
    }
    btnDaily.style.color = '#fff';
    btnWeekly.style.color = 'hsl(235deg, 45%, 61%)';
    btnMonthly.style.color = 'hsl(235deg, 45%, 61%)';
}

const appendWeeklyHours = () => {
    for (let i = 0, j = 0; i < currentHours.length || previousHours.length, j < data.length; i++, j++) {
        currentHours[i].innerText = `${data[j].timeframes.weekly.current}hrs`;
        previousHours[i].innerText = `Last Week - ${data[j].timeframes.weekly.previous} hrs`;
    }
    btnDaily.style.color = 'hsl(235deg, 45%, 61%)';
    btnWeekly.style.color = '#fff';
    btnMonthly.style.color = 'hsl(235deg, 45%, 61%)';
}
const appendMonthlyHours = () => {
    for (let i = 0, j = 0; i < currentHours.length || previousHours.length, j < data.length; i++, j++) {
        currentHours[i].innerText = `${data[j].timeframes.monthly.current}hrs`;
        previousHours[i].innerText = `Last Week - ${data[j].timeframes.monthly.previous} hrs`;
    }
    btnDaily.style.color = 'hsl(235deg, 45%, 61%)';
    btnWeekly.style.color = 'hsl(235deg, 45%, 61%)';
    btnMonthly.style.color = '#fff';
}


btnDaily.addEventListener('click', () => {
    appendDailyHours();
})
btnWeekly.addEventListener('click', () => {
    appendWeeklyHours();
})
btnMonthly.addEventListener('click', () => {
    appendMonthlyHours();
})
