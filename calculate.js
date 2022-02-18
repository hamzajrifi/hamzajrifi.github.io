/******************* calculate page *******************/

const hours_day = 24;
const minte_in_hour = 60;
const second_in_minite = 60;

///----///
const day_Input = document.querySelector('#day-input');
const calculate_button = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const second = document.querySelector('#second');

calculate_button.addEventListener('click', () => {
    let days = day_Input.value;
    let calchours = days * hours_day;
    let calculminutes = calchours * minte_in_hour;
    let calcsecond = calculminutes * second_in_minite;

    hours.innerText = `${calchours} hours`;
    minutes.innerText = `${calculminutes} minutes`;
    second.innerText = `${calcsecond} seconds`;
})