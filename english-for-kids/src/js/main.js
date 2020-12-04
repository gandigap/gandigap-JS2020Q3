/* const { default: BaseElement } = require('./example'); */

import DATA_FOR_CARDS from './Data';

const { default: Card } = require('./Card');

class Main {
  constructor() {
    console.log('Hello from JavaScript!');
    this.data = DATA_FOR_CARDS;
    this.isTrainActive = true;
    this.allCards = [];
    this.toggleGameMode = document.getElementById('check__toogle');
    this.isTrainActive = true;
    this.tempCategory = '';
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
    this.tempCategory = category;
    document.querySelector('.cards').id = this.tempCategory;
    this.data.forEach((element) => {
      if (element[0].nameCategory === category) {
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

  addTable() {}
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
    document.querySelector('.start').style.opacity = '1';
    main.isTrainActive = false;
  } else {
    document.querySelectorAll('.card__content').forEach((element) => {
      element.style.overflow = 'initial';
    });
    allTextInfo.forEach((element) => {
      element.style.bottom = '0px';
    });
    document.querySelector('.start').style.opacity = '0';
    main.isTrainActive = true;
  }
});

console.log(main.getCards());
/* main.removeElementsInBlock('.app__information'); */

main.getCards().forEach((element) => {
  element.addEventListener('click', () => {
    if (document.querySelector('.cards').getAttribute('id') === 'categories') {
      console.log(element.querySelector('.card__info__text').textContent);
    }
  });
});

/* for (let i = 0; i < clickcard.length; i += 1) {
  clickcard[i].addEventListener('click', () => {
    console.log('a');
    console.log(clickcard[i].querySelector('.card__img').classList.add('a'));
  });
} */

/* const appInfo = document.querySelector('.app__information');
while (appInfo.firstChild) {
  appInfo.removeChild(appInfo.firstChild);
} */
