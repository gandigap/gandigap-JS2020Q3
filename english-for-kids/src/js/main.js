/* const { default: BaseElement } = require('./example'); */

import DATA_FOR_CARDS from './Data';

const { default: Card } = require('./Card');

class Main {
  constructor() {
    console.log('Hello from JavaScript!');
    this.data = DATA_FOR_CARDS;
    this.isTrainActive = true;
    this.allCards = [];
    this.allLinks = [];
    this.allAudio = [];
    this.burgerMenu = document.getElementById('check__burger__menu');
    this.toggleGameMode = document.getElementById('check__toogle');
    this.gameStartButton = document.querySelector('.game__control__btn');
    this.gamePlayButton = document.querySelector('.play_btn');
    this.gameRepeatButton = document.querySelector('.repeat');
    this.isGameActive = false;
    this.tempCategory = '';
    this.NumberAudioOnGame = 0;
  }

  removeElementsInBlock(parentBlock) {
    this.parentContainer = document.querySelector(parentBlock);
    while (this.parentContainer.firstChild) {
      this.parentContainer.removeChild(this.parentContainer.firstChild);
    }
  }

  addBlock(parentBlock, newBlock, classNewBlock) {
    this.parentContainer = document.querySelector(parentBlock);
    this.newContainer = document.createElement(newBlock);
    this.newContainer.classList.add(classNewBlock);
    this.parentContainer.append(this.newContainer);
  }

  getDefaultArray(length) {
    this.arrayDefaultValues = [];
    for (let i = 0; i < length; i += 1) {
      this.arrayDefaultValues.push(i + 1);
    }
    return this.arrayDefaultValues;
  }

  getRandomArray(min, max, length) {
    const size = length;
    const arr = [];
    this.arrayRandomValues = [];
    for (let i = min; i <= max; i += 1) {
      arr.push(i);
    }
    for (let i = min; i <= size; i += 1) {
      const VALUE = arr.splice(Math.floor(Math.random() * ((max - i) - 1) + 1), 1);
      this.arrayRandomValues.push(VALUE.pop());
    }
    return this.arrayRandomValues;
  }

  addCards(category, arrayValues) {
    this.tempCategory = category.toLowerCase();
    document.querySelector('.cards').id = this.tempCategory;
    this.data.forEach((element) => {
      if (element[0].nameCategory === this.tempCategory) {
        for (let i = 0; i < arrayValues.length; i += 1) {
          const INDEX = arrayValues[i];
          const card = new Card('div', '.cards', 'card');
          card.createCard(element[INDEX].word,
            element[INDEX].translation,
            element[INDEX].image,
            element[INDEX].audioSrc);
          this.allCards.push(card);
        }
      }
    });
    this.addEventListeners();
  }

  openCategory(category) {
    this.removeElementsInBlock('.cards');
    this.addCards(category, this.getRandomArray(1, 16, 8));
    this.tempCategory = category.toLowerCase();
    document.querySelector('.cards').id = this.tempCategory;
    this.addEventListeners();
  }

  addEventListeners() {
    this.allCards.forEach((element) => {
      element.el.addEventListener('click', () => {
        if (document.querySelector('.cards').getAttribute('id') === 'categories') {
          this.tempCategory = element.el.querySelector('.card__info__text').textContent.toLowerCase();
          this.openCategory(this.tempCategory);
        } else {
          console.log('click');
          /* Flip card 0n click and backflipn on mouse leave */
          const cardContent = element.el.querySelector('.card__content');
          const flipBut = element.el.querySelector('.flip_button');
          console.log(cardContent);
          console.log(flipBut);
          flipBut.onclick = () => {
            cardContent.classList.add('card_active');
          };
          cardContent.addEventListener('mouseleave', () => {
            cardContent.classList.remove('card_active');
          }, false);
        }
        /* Play audio */
        if (this.isTrainActive) {
          const AUDIO_FILE = element.el.querySelector('audio');
          AUDIO_FILE.play();
        }
      });
    });
  }

  flipCard(cardId) {
    this.cardId = cardId;
    const CARD = document.getElementById(`${this.cardId}`);
    CARD.classList.add('.flip_active');
  }

  getCards() {
    this.allCards = document.querySelectorAll('.card');
    return this.allCards;
  }

  getLinks() {
    this.allLinks = document.querySelectorAll('.header__nav__list__item__link');
    return this.allLinks;
  }

  getAudio() {
    this.allAudio = document.querySelectorAll('audio');
    return this.allAudio;
  }

  playGame() {
    const ARRAY_RANDOM_VALUES = this.getRandomArray(0, 7, 8);
    console.log(ARRAY_RANDOM_VALUES + ' sound');
    this.getAudio()[ARRAY_RANDOM_VALUES[this.NumberAudioOnGame]].play();
  }
}

const main = new Main();
window.main = main;

main.addBlock('.app__information', 'div', 'cards');
main.addCards('categories', main.getDefaultArray(8));
/* main.addCards('transport', main.getRandomArray(1, 16, 8)); */

main.toggleGameMode.addEventListener('click', () => {
  const allTextInfo = document.querySelectorAll('.card__info');
  if (main.isTrainActive) {
    document.querySelectorAll('.card__content').forEach((element) => {
      element.style.overflow = 'hidden';
    });
    allTextInfo.forEach((element) => {
      element.style.bottom = '-40px';
    });
    document.querySelector('.game__control__btn').style.opacity = '1';
    main.isTrainActive = false;
  } else {
    document.querySelectorAll('.card__content').forEach((element) => {
      element.style.overflow = 'initial';
    });
    allTextInfo.forEach((element) => {
      element.style.bottom = '0px';
    });
    document.querySelector('.game__control__btn').style.opacity = '0';
    main.isTrainActive = true;
  }
});

/* main.removeElementsInBlock('.app__information'); */

/* Make cards after click on card in cards category */
/* main.getCards().forEach((element) => {
  main.allCards = [];
  element.addEventListener('click', () => {
    if (document.querySelector('.cards').getAttribute('id') === 'categories') {
      main.tempCategory = element.querySelector('.card__info__text').textContent.toLowerCase();
      main.openCategory(main.tempCategory);
    }
    console.log('click');
    const cardContent = element.querySelector('.card__content');
    const flipBut = element.querySelector('.flip_button');
    console.log(cardContent);
    console.log(flipBut);
    flipBut.onclick = () => {
      main.cardContent.classList.add('card_active');
    };

    cardContent.addEventListener('mouseleave', () => {
      main.cardContent.classList.remove('card_active');
    }, false);
  });
}); */

/* Make cards after click on link in nav menu */
main.getLinks().forEach((element) => {
  element.addEventListener('click', () => {
    if (element.querySelector('.nav__list__text').textContent === 'Main menu') {
      main.tempCategory = 'categories';
    } else {
      main.tempCategory = element.querySelector('.nav__list__text').textContent.toLowerCase();
    }
    document.querySelector('.cards').id = main.tempCategory;
    main.allCards = [];
    main.removeElementsInBlock('.cards');
    if (main.tempCategory === 'categories') {
      main.addCards(main.tempCategory, main.getDefaultArray(8));
    } else {
      main.addCards(main.tempCategory, main.getRandomArray(1, 16, 8));
    }
    main.burgerMenu.checked = false;
    main.toggleGameMode.checked = false;
  });
});

main.gameStartButton.addEventListener('click', () => {
  main.gameStartButton.classList.add('repeat');
  main.gameStartButton.classList.remove('game__control__btn');
  const BUTTON_REPEAT_TEXT = document.querySelector('.game__control__btn__text');
  BUTTON_REPEAT_TEXT.textContent = 'repeat';
  BUTTON_REPEAT_TEXT.style.color = '#ffffff';
  const BUTTON_REPEAT_IMG = document.querySelector('.game__control__btn__img');
  BUTTON_REPEAT_IMG.src = 'assets/icons/repeat.png';
  main.playGame();
});

/* main.gameRepeatButton.addEventListener('click', () => {
  console.log('click repeat');
  const ARRAY_RANDOM_VALUES = main.getRandomArray(0, 7, 8);
  main.playAudioWhenStartGame(ARRAY_RANDOM_VALUES);
}); */
