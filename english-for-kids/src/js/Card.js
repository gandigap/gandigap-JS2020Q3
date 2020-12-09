/* import dataForCards from './Data'; */

export default class Card {
  constructor(type, parentSelector, className) {
    const parent = document.querySelector(parentSelector);
    this.el = document.createElement(type);
    this.el.classList.add(className);
    parent.appendChild(this.el);
  }

  createCard(cardWord, cardTranslation, cardSrcImage, cardSrcAudio) {
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
                            <audio src="${cardSrcAudio}"></audio>
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
  }
}
