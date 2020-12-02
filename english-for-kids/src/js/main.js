/* const { default: BaseElement } = require('./example'); */

import DATA_FOR_CARDS from './Data';

const { default: Card } = require('./Card');

class Main {
  constructor() {
    console.log('Hello from JavaScript!');
    this.data = DATA_FOR_CARDS;
    this.isTrainActive = true;
    this.allCards = [];
    console.log(this.data[1][1].translation);
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

  addCards(category) {
    console.log('start cicle');
    this.data.forEach((element) => {
      if (element[0].nameCategory === category) {
        for (let i = 1; i < 9; i += 1) {
          const card = new Card('div', '.cards', 'card');
          card.setStringCardHTML(element[i].word, element[i].translation, element[i].image);
          this.allCards.push(card);
        }
      }
    });
  }

  flipCard(cardId) {
    console.log('click');
    this.cardId = cardId;
    const CARD = document.getElementById(`${this.cardId}`);
    console.log(CARD);
    CARD.classList.add('.flip_active');
  }

  getCards() {
    this.allCards = document.querySelectorAll('.card');
    return this.addCards;
  }

  addTable() {}
}

const main = new Main();
window.main = main;

main.addBlock('.app__information', 'div', 'cards');
main.addCards('categories');
/* main.removeElementsInBlock('.app__information'); */

console.log(main.allCards);

/* main.getCards.onclick = () => {
  console.log('click AAA');
}; */

/* const newElement = new BaseElement('div', '.cards');
console.log(newElement); */

/* const appInfo = document.querySelector('.app__information');
while (appInfo.firstChild) {
  appInfo.removeChild(appInfo.firstChild);
} */

/* const cards = new Card('div', 'cards', '.app__information');
for (let i = 0; i < 5; i += 1) {
  cards.addChildElement('card+');
} */
