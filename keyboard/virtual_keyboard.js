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
  buttonOpen: 'button__kb__view',
  buttonSound: 'button__sound',
  keySpecial: 'key-special',
  commonKey: 'common_key',
  keyPressed: 'key_pressed',
  keyActive: 'key_active',
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
  const [val, altVal, newval] = values;
  const textContent = newval;   //toUpperCase()
  const textElement = document.createElement('span');
  const isAltValExists = altVal !== undefined;
  const isAltValDifferentChar = val.toUpperCase() !== altVal;
  const alternateContent = (isAltValExists && isAltValDifferentChar) ? `<div class="altValue">${altVal}</div>` : '';
  textElement.innerHTML = textContent; //+ alternateContent
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
  buttonOpen.append(document.createTextNode('Show KB'));
  const buttonSound = document.createElement('button');
  buttonSound.classList.add(cssClasses.buttonSound);
  buttonSound.append(document.createTextNode('Sound On'));
  buttonsContainer.append(buttonOpen, buttonSound);

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
  info.innerHTML = `<p>Переключение языка Shift + Alt</p><p>Звуковой  набор - ${'&#9835'} на клавиатуре.</p>`;
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
  if (isShiftActive) {
    const keyShiftLeft = document.querySelector('#ShiftLeft');
    const keyShiftRight = document.querySelector('#ShiftRight');
    textArea.setRangeText(char.toUpperCase(), textArea.selectionStart, textArea.selectionEnd, 'end');
    isShiftActive = false;
    keyShiftLeft.classList.remove('key_active');
    keyShiftRight.classList.remove('key_active');
    switchLayoutLowerCase();

  } else {
    textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, 'end');
  }

  textArea.focus();
};

const printText = (textArea, char) => {
  const cursorPos = textArea.selectionEnd;
  const prevLine = textArea.value.lastIndexOf('\n', cursorPos);
  const maxCols = textArea.getAttribute('cols');


  textArea.setRangeText(char + ' ', textArea.selectionStart, textArea.selectionEnd, 'end');


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

const switchLayoutUpperCase = () => {
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

const switchLayoutLowerCase = () => {
  let lang = getLang();
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

const isShiftDown = () => keyDownSet.has('ShiftLeft') || keyDownSet.has('ShiftRight');
const isAltDown = () => keyDownSet.has('AltLeft') || keyDownSet.has('AltRight');
const isLangDown = () => keyDownSet.has('Lang');
const isCapsDown = () => keyDownSet.has('CapsLock');

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
      break;
    case 'Microphone':
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
      const char = currentLayout[code][isShiftActive || isCapsOn() ? 1 : 0];
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

let isCapsActive = false;
let isShiftActive = false;

const addKeyDown = (event, code) => {
  const keyElement = document.querySelector(`#${code}`);

  if (keyElement) {
    event.preventDefault();
    keyDownSet.add(code);

    keyElement.classList.add(cssClasses.keyPressed);
    processKeyPressed(code);
    if (isShiftDown() && isAltDown() || isLangDown()) switchLayout();

    if (isCapsDown()) {
      const keyCaps = document.querySelector('#CapsLock');
      if (isCapsActive === false) {
        isCapsActive = true;
        keyCaps.classList.add('key_active');
        switchLayoutUpperCase();
      } else {
        isCapsActive = false;
        keyCaps.classList.remove('key_active');
        switchLayoutLowerCase();
      }

    }

    if (isShiftDown()) {
      const keyShiftLeft = document.querySelector('#ShiftLeft');
      const keyShiftRight = document.querySelector('#ShiftRight');
      if (isShiftActive === false) {
        isShiftActive = true;
        keyShiftLeft.classList.add('key_active');
        keyShiftRight.classList.add('key_active');
        switchLayoutUpperCase();
      }
      else {
        isShiftActive = false;
        keyShiftLeft.classList.remove('key_active');
        keyShiftRight.classList.remove('key_active');
        switchLayoutLowerCase();
      }

    }
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

let isSoundOn = 'true';
let isKBShow = false;

window.onload = function () {
  // Ваш скрипт

  const open = document.querySelector('.button__kb__view');
  const sound = document.querySelector('.button__sound');
  const keyboardWindow = document.querySelector('.keyboard_container');

  // When the user clicks on button, close the modal
  open.onclick = function () {
    if (isKBShow) {
      isKBShow = false;
      open.textContent = 'Show KB';
      keyboardWindow.style.bottom = "-100%";
    } else {
      isKBShow = true;
      open.textContent = 'Hide KB';
      keyboardWindow.style.bottom = "0";
    }
  }



  sound.onclick = function () {
    if (isSoundOn) {
      isSoundOn = false;
      sound.textContent = 'Sound on';
    } else {
      isSoundOn = true;
      sound.textContent = 'Sound off';
    }
    console.log(isSoundOn);
  }


  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = new SpeechRecognition();
  let isRecordActive = false;

  let start = document.getElementById("Microphone");
  rec.interimResults = false;

  start.addEventListener("click", function () {
    if (isRecordActive) {
      reset();
      console.log("stop");
      this.classList.remove('key_active');
      isRecordActive = false;
    } else {
      rec = new SpeechRecognition();
      record();
      console.log("start");
      this.classList.add('key_active');
      isRecordActive = true;
    }
  });

  const record = () => {
    rec.lang = (getLang() === 'en') ? 'en-US' : 'ru-RU';
    rec.start();
    rec.addEventListener("result", function (e) {
      const textArea = document.querySelector(`.${cssClasses.textArea}`);
      var text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      console.log(text);
      printText(textArea, text);
    });

    rec.addEventListener("end", function (e) {
      rec.start();
    });
  };

  const reset = () => {
    rec = undefined;
  };
};

// AUDIO____________________________
const playSound = (event) => {
  if (isSoundOn) {
    let langAudio = getLang();
    const audio = langAudio === 'en' ? document.querySelector(`#audio_en`) : document.querySelector(`#audio`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

};