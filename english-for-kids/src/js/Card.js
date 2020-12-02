/* import dataForCards from './Data'; */

export default class Card {
  constructor(type, parentSelector, className) {
    const parent = document.querySelector(parentSelector);
    this.el = document.createElement(type);

    this.el.classList.add(className);
    parent.appendChild(this.el);
  }

  setStringCardHTML(cardWord, cardTranslation, cardSrcImage) {
    this.el.innerHTML = `<div class="card__content" id="${cardWord}">
                          <div class="card__content__front ">
                            <figure class="card__img">
                              <img class="image" src="${cardSrcImage}" alt="${cardWord}">
                              <figcaption></figcaption>
                          </figure>
                            <div class="card__info">
                              <p class="card__info__text">${cardWord}</p>
                              <button class="flip_button" id="flip_button__${cardWord}">
                                <img class="flip_button__img" src="assets/icons/flip.png" alt="Flip">
                              </button>
                            </div>
                          </div>
                          <div class="card__content__back">
                            <figure class="card__img">
                              <img class="image" src="${cardSrcImage}" alt="${cardTranslation}">
                              <figcaption></figcaption>
                          </figure>
                            <div class="card__info">
                              <p class="card__info__text">${cardTranslation}</p>
                            </div>
                          </div>
                        </div>`;


    this.cardContent = document.getElementById(cardWord);
    this.flipBut = document.getElementById(`flip_button__${cardWord}`);
    this.flipBut.onclick = () => {
      this.cardContent.classList.add('card_active');
    };

    this.cardContent.addEventListener('mouseleave', () => {
      this.cardContent.classList.remove('card_active');
    }, false);
  }

  /* constructor(type, className, parentSelector) {
    const parent = document.querySelector(parentSelector);
    this.el = document.createElement(type);
    this.el.classList.add(className);
    this.parent = parent;
  }

  hide() {
    this.el.style.display = 'none';
  }

  show() {
    this.el.style.display = 'sdfs';
  }

  removeNestedElements() {
    while (this.el.firstChild) {
      this.el.removeChild(this.el.firstChild);
    }
  }

  addChildElement(newElem) {
    this.parent.appendChild(document.createElement(newElem));
  } */
}