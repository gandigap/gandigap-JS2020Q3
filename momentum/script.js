//_____________________________________________________________________Change background
let arrayBackground = [];
let arrayRandomValue = [];
console.log(arrayBackground);

for (let index = 0; index < 24; index++) {
  arrayRandomValue[index] = Math.floor(1 + Math.random() * 12 + 1 - 1);
}

for (let index = 0; index < 24; index++) {
  if (index >= 3 && index < 9) {
    // Morning
    arrayBackground[index] = "assets/images/morning/" + arrayRandomValue[index] + ".jpg";
  } else if (index >= 9 && index < 15) {
    // Day
    arrayBackground[index] = "assets/images/day/" + arrayRandomValue[index] + ".jpg";
  } else if (index >= 15 && index < 21) {
    // Evening
    arrayBackground[index] = "assets/images/evening/" + arrayRandomValue[index] + ".jpg";
  } else if (index >= 21 || index < 3) {
    // Night
    arrayBackground[index] = "assets/images/night/" + arrayRandomValue[index] + ".jpg";
  }

}

const btnPrev = document.querySelector('.button__prev__background');
const btnNext = document.querySelector('.button__next__background');

function changeBackground() {
  const body = document.querySelector('body');
  let today = new Date(),
    hour = today.getHours(),
    seconds = today.getSeconds(),
    minutes = today.getMinutes();
  // console.log(minutes + " - " + seconds);

  if (minutes === 0 && seconds === 0) {
    viewBgImage(arrayBackground[hour]);
  }
  setTimeout(changeBackground, 1000);
}

let today = new Date(),
  hour = today.getHours(),
  numberBackgroundImage = hour;

btnNext.addEventListener('click', () => {
  console.log(numberBackgroundImage);
  if (numberBackgroundImage === 23) {
    numberBackgroundImage = -1;
  }
  numberBackgroundImage += 1;
  console.log(numberBackgroundImage + " now");
  viewBgImage(arrayBackground[numberBackgroundImage]);


});

btnPrev.addEventListener('click', () => {
  console.log(numberBackgroundImage);
  if (numberBackgroundImage === 0) {
    numberBackgroundImage = 24;
  }
  numberBackgroundImage -= 1;
  console.log(numberBackgroundImage + " now");
  viewBgImage(arrayBackground[numberBackgroundImage]);

});

changeBackground();


function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}

const checkBtns = () => {
  btnPrev.disabled = numberBackgroundImage <= 0;
  btnNext.disabled = numberBackgroundImage >= 23;
}

checkBtns();

//_____________________________________________________________________DATE
// DOM Elements
const time = document.querySelector('.time'),
  date = document.querySelector('.date'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    numberDay = today.getDate(),
    month = today.getMonth(),
    weekDay = today.getDay(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Arrays
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';


  // Output Time and Date
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  date.innerHTML = ` ${weekDays[weekDay]}, ${numberDay} ${months[month]}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {

  let today = new Date(),
    hour = today.getHours();
  document.body.style.backgroundImage = `url(${arrayBackground[hour]})`;


  if (hour >= 3 && hour < 9) {
    // Morning

    greeting.textContent = 'Good Morning , ';
  } else if (hour >= 9 && hour < 15) {
    // Day

    greeting.textContent = 'Have a nice day , ';
  } else if (hour >= 15 && hour < 21) {
    // Evening

    greeting.textContent = 'Good Evening , ';
  } else if (hour >= 21 || hour < 3) {
    // Night

    greeting.textContent = 'Good Night , ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
let nameValue = name.textContent;
let focusValue = focus.textContent;
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.keyCode === 13) {
      if (e.target.innerText === '') {
        if (localStorage.getItem('name') !== null) name.textContent = localStorage.getItem('name');
        else name.textContent = nameValue;
      } else localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    if (e.target.innerText === '') {
      if (localStorage.getItem('name') !== null) name.textContent = localStorage.getItem('name');
      else name.textContent = nameValue;
    } else localStorage.setItem('name', e.target.innerText);
    name.blur();
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText === '') {
        if (localStorage.getItem('focus') !== null) focus.textContent = localStorage.getItem('focus');
        else focus.textContent = focusValue;
      } else localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    if (e.target.innerText === '') {
      if (localStorage.getItem('focus') !== null) focus.textContent = localStorage.getItem('focus');
      else focus.textContent = focusValue;
    } else localStorage.setItem('focus', e.target.innerText);
    focus.blur();
  }
}

function clickName() {
  nameValue = name.textContent;
  name.textContent = '';
}

function clickFocus() {
  focusValue = focus.textContent;
  focus.textContent = '';
}

name.addEventListener('click', clickName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('click', clickFocus);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();

//_____________________________________________________________________WEATHER
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const speedWind = document.querySelector('.speed__wind');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');



async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=b9263267a94c30aaafc8ee41fb19e494&units=metric`;

  // ${city.textContent}
  const res = await fetch(url);
  const data = await res.json();

  if (data.message === 'city not found') {
    city.textContent = 'Not found:Retry';
    temperature.textContent = `undefined`;
    humidity.textContent = `undefined`;
    speedWind.textContent = `undefined`;
    weatherDescription.textContent = `undefined`;
  } else {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    humidity.textContent = `Humidity ${data.main.humidity}%`;
    speedWind.textContent = `Wind speed ${data.wind.speed} m/s`;
    weatherDescription.textContent = data.weather[0].description;
  }

}


let cityValue = city.textContent;
function setCity(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.keyCode === 13) {
      if (e.target.innerText === '') {
        if (localStorage.getItem('city') !== null) city.textContent = localStorage.getItem('city');
        else city.textContent = cityValue;
      } else localStorage.setItem('city', e.target.innerText);
      getWeather();
      city.blur();
    }
  } else {
    if (e.target.innerText === '') {
      if (localStorage.getItem('city') !== null) city.textContent = localStorage.getItem('city');
      else city.textContent = cityValue;
    } else localStorage.setItem('city', e.target.innerText);
    getWeather();
    city.blur();
  }
}

city.textContent = '[Enter city]';

function getCity() {

  if (localStorage.getItem('city') === null) {
    city.textContent = '[Enter city]';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

getCity();



function clickCity() {
  cityValue = city.textContent;
  city.textContent = '';
}


document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('click', clickCity);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);

//_____________________________________________________________________QUOTE
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.refresh__button__quote');

async function getQuote() {
  const url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
  const res = await fetch(url);
  const data = await res.json();

  blockquote.textContent = data.quote.quoteText;
  figcaption.textContent = data.quote.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);




