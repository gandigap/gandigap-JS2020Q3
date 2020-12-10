/* const { default: BaseElement } = require('./example'); */

import DATA_FOR_CARDS from './Data';

const { default: Card } = require('./Card');

class Main {
  constructor() {
    this.bodyContent = document.querySelector('body');
    this.burgerLink = document.querySelector('#check__burger__menu');
    this.data = DATA_FOR_CARDS;
    this.isTrainActive = true;
    this.allCards = [];
    this.allLinks = [];
    this.allAudio = [];
    this.burgerMenu = document.getElementById('check__burger__menu');
    this.toggleGameMode = document.getElementById('check__toogle');
    this.gameStartButton = document.querySelector('.game__control__btn');
    this.gamePlayButton = document.querySelector('.play_btn');
    this.isGameActive = false;
    this.tempCategory = '';
    this.NumberAudioOnGame = 0;
    this.arrayRandomValuesForAudioFiles = 0;
    this.currentAudioFile = undefined;
    this.marksContainer = document.querySelector('.mark__container');
    this.mistakes = 0;
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

  addStar(value) {
    const STAR = document.createElement('img');
    STAR.classList.add('mark__img');
    if (value === 'good') {
      STAR.src = 'assets/icons/star-good.png';
    } else if (value === 'bad') {
      STAR.src = 'assets/icons/star-bad.png';
    }
    this.marksContainer.append(STAR);
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
    const ARRAY_RANDOM_VALUES = this.getRandomArray(1, 16, 8);
    console.log(ARRAY_RANDOM_VALUES);
    this.addCards(category, ARRAY_RANDOM_VALUES);
    this.tempCategory = category.toLowerCase();
    document.querySelector('.cards').id = this.tempCategory;
    this.hideTextInfo();
    /*  this.addEventListeners(); */
  }

  addEventListeners() {
    this.allCards.forEach((element) => {
      element.el.addEventListener('click', () => {
        if (document.querySelector('.cards').getAttribute('id') === 'categories') {
          this.hideTextInfo();
        }
        if (document.querySelector('.cards').getAttribute('id') === 'categories') {
          this.tempCategory = element.el.querySelector('.card__info__text').textContent.toLowerCase();
          this.openCategory(this.tempCategory);
        }

        if (this.isTrainActive && !(this.isGameActive)) {
          /* Play audio */
          const AUDIO_FILE = element.el.querySelector('audio');
          AUDIO_FILE.play();
        }

        /* Check game mode and add star */
        if (this.isGameActive && this.currentAudioFile === element.el.querySelector('audio')) {
          element.el.classList.add('right__card');
          const CORRECT_AUDIO = document.querySelector('.correct__answer__audio');
          CORRECT_AUDIO.play();
          setTimeout(() => this.playGame(), 1000);
          this.addStar('good');
        } else if (this.isGameActive) {
          const ERROR_AUDIO = document.querySelector('.correct__error__audio');
          ERROR_AUDIO.play();
          this.addStar('bad');
          this.mistakes += 1;
        }
      });
      /* Flip card 0n click and backflipn on mouse leave */
      const cardContent = element.el.querySelector('.card__content');
      element.el.querySelector('.flip_button').addEventListener('click', () => {
        cardContent.classList.add('card_active');
        cardContent.addEventListener('mouseleave', () => {
          cardContent.classList.remove('card_active');
        }, false);
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
    const CARDS = document.querySelector('.cards');
    this.allAudio = CARDS.querySelectorAll('audio');
    return this.allAudio;
  }

  playGame() {
    if (this.NumberAudioOnGame < 7) {
      this.NumberAudioOnGame += 1;
      const NUMBER = this.NumberAudioOnGame;
      this.currentAudioFile = this.getAudio()[this.arrayRandomValuesForAudioFiles[NUMBER]];

      this.currentAudioFile.play();
    } else if (this.NumberAudioOnGame === 7) {
      this.NumberAudioOnGame = 0;
      this.gameOver();
    }
  }

  repeatAudio() {
    const NUMBER = this.NumberAudioOnGame;
    this.currentAudioFile = this.getAudio()[this.arrayRandomValuesForAudioFiles[NUMBER]];
    this.currentAudioFile.play();
  }

  removeActiveLink() {
    this.document.querySelector('.link__active').classList.remove('link__active');
  }

  gameOver() {
    this.removeElementsInBlock('.cards');
    this.removeElementsInBlock('.mark__container');
    this.getResult('.cards');
    this.getDefaultButton();
    if (this.mistakes === 0) {
      const AUDIO_SUCCESS = document.querySelector('.correct__good__audio');
      setTimeout(() => AUDIO_SUCCESS.play(), 1000);
    } else {
      const AUDIO_FAILURE = document.querySelector('.correct__bad__audio');
      setTimeout(() => AUDIO_FAILURE.play(), 1000);
    }
    this.toggleGameMode.checked = false;
    setTimeout(() => {
      this.removeElementsInBlock('.cards');
      this.addCards('categories', this.getDefaultArray(8));
    }, 3000);
    this.isGameActive = false;
    this.isTrainActive = true;
    this.mistakes = 0;
  }

  hideTextInfo() {
    const allTextInfo = document.querySelectorAll('.card__info');
    if (this.isTrainActive) {
      // Hide text info when active Play Mode
      document.querySelectorAll('.card__content').forEach((element) => {
        element.style.overflow = 'hidden';
      });
      allTextInfo.forEach((element) => {
        element.style.bottom = '-40px';
      });
      document.querySelector('.game__control__btn').style.display = 'flex';
      this.isTrainActive = false;
      // Create Array Random Audio Words from Cards on page
      this.arrayRandomValuesForAudioFiles = this.getRandomArray(0, 7, 7);
    } else {
      // Show text info when active Train Mode
      document.querySelectorAll('.card__content').forEach((element) => {
        element.style.overflow = 'initial';
      });
      allTextInfo.forEach((element) => {
        element.style.bottom = '0px';
      });
      if (this.isGameActive) {
        this.getDefaultButton();
      } else {
        document.querySelector('.game__control__btn').style.display = 'none';
      }
      this.isTrainActive = true;
    }
  }

  getResult(parentElement) {
    const BLOCK_FOR_RESULT = document.querySelector(parentElement);
    const CARD_RESULT = document.createElement('div');
    CARD_RESULT.classList.add('card');
    let cardSrcImage;
    BLOCK_FOR_RESULT.appendChild(CARD_RESULT);
    let resultText = '';
    if (this.mistakes === 0) {
      resultText = 'Success';
      cardSrcImage = 'assets/images/emotions/smile.png';
    } else {
      resultText = `Failure: ${this.mistakes} errors`;
      cardSrcImage = 'assets/images/emotions/crying.png';
    }
    CARD_RESULT.innerHTML = `<div class="card__content">
                                    <div class="card__content__front ">
                                      <figure class="card__img">
                                        <img class="image" src="${cardSrcImage}" alt="${resultText}">
                                        <figcaption></figcaption>
                                      </figure>
                                      <div class="card__info">
                                        <p class="card__info__text">${resultText}</p>
                                      </div>
                                    </div>
                                  </div>`;
  }

  getDefaultButton() {
    document.querySelector('.repeat').classList.add('game__control__btn');
    document.querySelector('.repeat').classList.remove('repeat');
    const BUTTON_REPEAT_TEXT = document.querySelector('.game__control__btn__text');
    BUTTON_REPEAT_TEXT.textContent = 'Start';
    const BUTTON_REPEAT_IMG = document.querySelector('.game__control__btn__img');
    BUTTON_REPEAT_IMG.src = 'assets/icons/play.png';
    this.gameStartButton.style.display = 'none';
  }
}

const main = new Main();
window.main = main;

main.addBlock('.app__information', 'div', 'cards');
main.addCards('categories', main.getDefaultArray(8));
/* main.addCards('transport', main.getRandomArray(1, 16, 8)); */

main.toggleGameMode.addEventListener('click', () => {
  main.hideTextInfo();
});

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
      const ARRAY_DEFAULT_VALUES = main.getDefaultArray(8);
      main.addCards(main.tempCategory, ARRAY_DEFAULT_VALUES);
    } else {
      const ARRAY_RANDOM_VALUES = main.getRandomArray(1, 16, 8);
      main.addCards(main.tempCategory, ARRAY_RANDOM_VALUES);
    }
    document.querySelector('.link__active').classList.remove('link__active');
    element.classList.add('link__active');
    main.burgerMenu.checked = false;
    main.toggleGameMode.checked = false;
  });
});

main.burgerLink.addEventListener('click', () => {
  if (main.burgerLink.checked) {
    main.bodyContent.style.position = 'fixed';
  } else {
    main.bodyContent.style.position = 'initial';
  }
});

main.gameStartButton.addEventListener('click', () => {
  if (main.tempCategory !== 'categories') {
    main.gameStartButton.classList.add('repeat');
    main.gameStartButton.classList.remove('game__control__btn');
    const BUTTON_REPEAT_TEXT = document.querySelector('.game__control__btn__text');
    BUTTON_REPEAT_TEXT.textContent = 'repeat';
    const BUTTON_REPEAT_IMG = document.querySelector('.game__control__btn__img');
    BUTTON_REPEAT_IMG.src = 'assets/icons/repeat.png';
    main.isGameActive = true;
    if (main.isGameActive
      && main.NumberAudioOnGame === 0
      && main.gameStartButton.getAttribute('class') !== 'repeat') {
      main.playGame();
    } else {
      main.repeatAudio();
    }
  }
});

/* main.repeatAudioButton.addEventListener('click', () => {
  main.repeatAudio();
}); */

/* main.gameRepeatButton.addEventListener('click', () => {
  console.log('click repeat');
  const ARRAY_RANDOM_VALUES = main.getRandomArray(0, 7, 8);
  main.playAudioWhenStartGame(ARRAY_RANDOM_VALUES);
}); */
