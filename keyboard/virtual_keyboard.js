import layouts from './layouts.js';

const cssClasses = {
  main: 'main',
  wrapper: 'wrapper',
  kbContainer: 'keyboard_container',
  kbKeys: 'keyboard_keys',
  textArea: 'textarea',
  key: 'key',
  info: 'info',
  buttonConatiner: 'buttons__container',
  buttonOpen: 'button__open',
  buttonClose: 'button__close',
  keySpecial: 'key-special',
  commonKey: 'common_key',
  keyPressed: 'key_pressed',
  capsIndicator: 'caps_indicator',
  lightOn: 'on',
};

const TEXT_AREA_MAX_COLS = 40;
const OFFSET_FORWARD = 1;
const OFFSET_BACKWARD = -1;

const keyDownSet = new Set();

const isCapsOn = () => document.querySelector(`.${cssClasses.capsIndicator}`).classList.contains(cssClasses.lightOn);

const defaultLang = 'en';
const saveLang = (lang) => window.localStorage.setItem('lang', lang);
const getLang = () => (window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : defaultLang);

const getCurrentLayout = () => layouts[getLang()];

const createKeyTextElement = (values) => {
  const [val, altVal] = values;
  const textContent = val;   //toUpperCase()
  const textElement = document.createElement('span');
  const isAltValExists = altVal !== undefined;
  const isAltValDifferentChar = val.toUpperCase() !== altVal;
  const alternateContent = (isAltValExists && isAltValDifferentChar) ? `<div class="altValue">${altVal}</div>` : '';
  textElement.innerHTML = textContent + alternateContent;
  return textElement;
};

const createKeyTextElementCase = (values) => {
  const [val, altVal] = values;
  const textContent = val.toUpperCase();   //toUpperCase()
  const textElement = document.createElement('span');
  const isAltValExists = altVal !== undefined;
  const isAltValDifferentChar = val.toUpperCase() !== altVal;
  const alternateContent = (isAltValExists && isAltValDifferentChar) ? `<div class="altValue">${altVal}</div>` : '';
  textElement.innerHTML = textContent + alternateContent;
  return textElement;
};

const createKeyboardElements = () => {
  const kbElements = Object.entries(getCurrentLayout()).map((key) => {
    const [id, values] = key;
    const elem = document.createElement('div');
    elem.id = id;
    elem.classList.add(cssClasses.key);
    elem.dataset.key = 'volume';
    // elem.style.gridArea = id;
    elem.append(createKeyTextElement(values));
    return elem;
  });
  return kbElements;
};

const createPageElements = (lang) => {
  const mainContainer = document.createElement('main');
  mainContainer.classList.add(cssClasses.main);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add(cssClasses.buttonConatiner);
  const buttonOpen = document.createElement('button');
  buttonOpen.classList.add(cssClasses.buttonOpen);
  buttonOpen.append(document.createTextNode('Open KB'));
  const buttonClose = document.createElement('button');
  buttonClose.classList.add(cssClasses.buttonClose);
  buttonClose.append(document.createTextNode('Close KB'));
  buttonsContainer.append(buttonOpen, buttonClose);

  const wrapperContainer = document.createElement('div');
  wrapperContainer.classList.add(cssClasses.wrapper);
  const textArea = document.createElement('textarea');
  textArea.classList.add(cssClasses.textArea);
  textArea.setAttribute('cols', TEXT_AREA_MAX_COLS);
  const kbContainer = document.createElement('div');
  kbContainer.classList.add(cssClasses.kbContainer);
  const capsIndicator = document.createElement('div');
  capsIndicator.classList.add(cssClasses.capsIndicator);
  kbContainer.append(capsIndicator);
  const kbKeys = document.createElement('div');
  kbKeys.classList.add(cssClasses.kbKeys);
  const kbElements = createKeyboardElements(lang);
  kbKeys.append(...kbElements);
  kbContainer.append(kbKeys);
  const info = document.createElement('div');
  info.append(document.createTextNode('Hello. Please click on text area. \n Alt + Shift - change language'));
  info.classList.add('info');



  mainContainer.append(wrapperContainer);
  wrapperContainer.append(textArea, buttonsContainer, kbContainer, info);
  return mainContainer;
};

const printCharacter = (textArea, char) => {
  const cursorPos = textArea.selectionEnd;
  const prevLine = textArea.value.lastIndexOf('\n', cursorPos);
  const maxCols = textArea.getAttribute('cols');
  if ((cursorPos - prevLine) > maxCols && textArea.selectionEnd - textArea.selectionStart === 0) {
    textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, 'end');
  textArea.focus();
};

const deleteCharacter = (textArea, offset) => {
  if (textArea.selectionStart === textArea.selectionEnd) {
    const start = Math.min(textArea.selectionStart, Math.max(0, textArea.selectionStart + offset));
    const end = Math.max(textArea.selectionEnd, textArea.selectionEnd + offset);
    textArea.setRangeText('', start, end, 'end');
  } else {
    textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end');
  }
  textArea.focus();
};

const moveCursorHorizontally = (n, textArea) => {
  textArea.setSelectionRange(Math.max(0, textArea.selectionEnd + n),
    Math.max(0, textArea.selectionEnd + n));
  textArea.focus();
};

const moveCursorDown = () => {
  const textArea = document.querySelector(`.${cssClasses.textArea}`);
  let cursorPos = textArea.selectionEnd;
  const prevLine = textArea.value.lastIndexOf('\n', cursorPos);
  const nextLine = textArea.value.indexOf('\n', prevLine + 1);
  if (nextLine !== -1) {
    cursorPos -= prevLine;
    textArea.selectionStart = nextLine + cursorPos;
    textArea.selectionEnd = nextLine + cursorPos;
  }
  textArea.focus();
};

const moveCursorUp = () => {
  const textArea = document.querySelector(`.${cssClasses.textArea}`);
  let cursorPos = textArea.selectionEnd;
  const prevLine = textArea.value.lastIndexOf('\n', cursorPos);
  const secLine = textArea.value.lastIndexOf('\n', prevLine - 1);
  if (prevLine !== -1) {
    cursorPos -= prevLine;
    textArea.selectionStart = secLine + cursorPos;
    textArea.selectionEnd = secLine + cursorPos;
  }
  textArea.focus();
};

const switchLayout = () => {
  let lang = getLang();
  lang = lang === 'en' ? 'ru' : 'en';
  saveLang(lang);
  const curLayout = getCurrentLayout();
  const kbKeysContainer = document.querySelector(`.${cssClasses.kbKeys}`);
  const keys = [...kbKeysContainer.children];
  keys.forEach((key) => {
    const values = curLayout[key.id];
    key.firstChild.remove();
    key.append(createKeyTextElement(values));
  });
};

const switchLayoutCase = () => {
  let lang = getLang();
  saveLang(lang);
  const curLayout = getCurrentLayout();
  const kbKeysContainer = document.querySelector(`.${cssClasses.kbKeys}`);
  const keys = [...kbKeysContainer.children];
  keys.forEach((key) => {
    const values = curLayout[key.id];
    key.firstChild.remove();
    key.append(createKeyTextElementCase(values));
  });
};

const isShiftDown = () => keyDownSet.has('ShiftLeft') || keyDownSet.has('ShiftRight');
const isAltDown = () => keyDownSet.has('AltLeft') || keyDownSet.has('AltRight');
const isLangDown = () => keyDownSet.has('Lang');

const processKeyPressed = (code) => {
  const textArea = document.querySelector(`.${cssClasses.textArea}`);
  const currentLayout = getCurrentLayout();
  switch (code) {
    case 'Backspace':
      deleteCharacter(textArea, OFFSET_BACKWARD);
      break;
    case 'Enter':
      printCharacter(textArea, '\n');
      break;
    case 'Tab':
      for (let i = 0; i < 4; i += 1) {
        printCharacter(textArea, ' ');
      }
      break;
    case 'CapsLock':
      document.querySelector(`.${cssClasses.capsIndicator}`).classList.toggle(cssClasses.lightOn);
      break;
    case 'Delete':
      deleteCharacter(textArea, OFFSET_FORWARD);
      break;
    case 'ArrowLeft':
      moveCursorHorizontally(OFFSET_BACKWARD, textArea);
      break;
    case 'ArrowRight':
      moveCursorHorizontally(OFFSET_FORWARD, textArea);
      break;
    case 'ArrowUp':
      moveCursorUp();
      break;
    case 'ArrowDown':
      moveCursorDown();
      break;
    case 'Lang':
      moveCursorDown();
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
    case 'AltLeft':
    case 'AltRight':
    case 'ControlLeft':
    case 'ControlRight':
    case 'WinLeft':
    case 'WinRight':
    case 'MetaLeft':
    case 'MetaRight':
      break;
    default: {
      const char = currentLayout[code][isShiftDown() ? 1 : 0];
      let charToPrint = char;
      if ((isCapsOn() && isShiftDown())) { // caps lock + shift = lower case
        charToPrint = char.toLowerCase();
      } else if (isCapsOn()) {
        charToPrint = char.toUpperCase();
      }
      printCharacter(textArea, charToPrint);
      break;
    }
  }
};

const addKeyDown = (event, code) => {
  const keyElement = document.querySelector(`#${code}`);

  if (keyElement) {
    console.log(code);
    event.preventDefault();
    keyDownSet.add(code);
    keyElement.classList.add(cssClasses.keyPressed);
    processKeyPressed(code);
    if (isShiftDown() && isAltDown() || isLangDown()) switchLayout();

    // if (isShiftDown()) switchLayoutCase();
  }
};

const addKeyUp = (event, code) => {
  const keyElement = document.querySelector(`#${code}`);
  if (keyElement) {
    event.preventDefault();
    keyDownSet.delete(code);
    keyElement.classList.remove(cssClasses.keyPressed);
  }
};

const onKeyDown = (event) => {
  addKeyDown(event, event.code);
};

const onKeyUp = (event) => {
  addKeyUp(event, event.code);
};

const onMouseDown = (event) => {
  if (event.currentTarget.classList.contains(cssClasses.key)) {
    addKeyDown(event, event.currentTarget.id);
  }
};

const onMouseUp = (event) => {
  if (event.currentTarget.classList.contains(cssClasses.keyPressed)) {
    addKeyUp(event, event.currentTarget.id);
  }
};

window.addEventListener('load', () => {
  const lang = getLang();
  const pageElements = createPageElements(lang);
  document.querySelector('body').appendChild(pageElements);
  document.querySelectorAll(`.${cssClasses.key}`).forEach((keyElement) => {
    keyElement.addEventListener('mousedown', onMouseDown);
    keyElement.addEventListener('mousedown', playSound);
    keyElement.addEventListener('mouseup', onMouseUp);
    keyElement.addEventListener('mouseout', onMouseUp);
  });
  document.addEventListener('keydown', onKeyDown, playSound);
  document.addEventListener('keyup', onKeyUp);
  document.addEventListener('keydown', playSound);
});


window.onload = function () {
  // Ваш скрипт
  const open = document.querySelector('.button__open');
  const close = document.querySelector('.button__close');
  const keyboardWindow = document.querySelector('.keyboard_container');

  // When the user clicks on button, close the modal
  open.onclick = function () {
    keyboardWindow.style.display = "flex";
  }

  close.onclick = function () {
    keyboardWindow.style.display = "none";
  }
};

// AUDIO____________________________
const playSound = (event) => {
  const audio = document.querySelector(`#audio`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};



// SPEECH________________
// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// recognition.lang = 'en-US';

// let p = document.createElement('p');
// const words = document.querySelector('.words');
// words.appendChild(p);

// recognition.addEventListener('result', e => {
//   const transcript = Array.from(e.results)
//     .map(result => result[0])
//     .map(result => result.transcript)
//     .join('');

//   const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
//   p.textContent = poopScript;

//   if (e.results[0].isFinal) {
//     p = document.createElement('p');
//     words.appendChild(p);
//   }
// });

// recognition.addEventListener('end', recognition.start);

// recognition.start();