// DOM Elements
const time = document.querySelector('.time'),
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

  //Random


  //Arrays
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';


  // Output Time
  time.innerHTML = `${numberDay} ${months[month]} , ${weekDays[weekDay]}  <br>
    ${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let randomValue = Math.floor(0 + Math.random() * 5 + 1 - 0);
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 3 && hour < 9) {
    // Morning
    document.body.style.backgroundImage =
      "url('assets/images/morning/" + randomValue + ".jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour >= 9 && hour < 15) {
    // Day
    document.body.style.backgroundImage =
      "url('assets/images/day/" + randomValue + ".jpg')";
    greeting.textContent = 'Have a nice day, ';
  } else if (hour >= 15 && hour < 21) {
    // Evening
    document.body.style.backgroundImage =
      "url('assets/images/evening/" + randomValue + ".jpg')";
    greeting.textContent = 'Good Evening, ';
  } else if (hour >= 21 && hour < 3) {
    // Night
    document.body.style.backgroundImage =
      "url('assets/images/night/" + randomValue + ".jpg')";
    greeting.textContent = 'Good Night, ';
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
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
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
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();