/* import dataForCards from './Data'; */

export default class Card {
  constructor(type, parentSelector, className) {
    const parent = document.querySelector(parentSelector);
    this.el = document.createElement(type);
    this.el.classList.add(className);
    this.toggleGameMode = document.getElementById('check__toogle');
    this.isTrainActive = true;
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
    this.cardContent = document.getElementById(cardWord);
    this.flipBut = document.getElementById(`flip_button__${cardWord}`);
    this.flipBut.onclick = () => {
      this.cardContent.classList.add('card_active');
    };

    this.cardContent.addEventListener('mouseleave', () => {
      this.cardContent.classList.remove('card_active');
    }, false);

    this.el.onclick = () => {
      if (this.toggleGameMode.checked) {
        console.log('Play active');
      }
      else {
        console.log('Train Active');
        this.playCard();
      }
    };

    /* this.toggleGameMode.onclick = () => {
      if (this.toggleGameMode.checked) {
        this.isTrainActive = false;
        console.log('Checked');
        this.hideElement();
      }
      else {
        this.isTrainActive = true;
        console.log('UNChecked');
        this.hideElement();
      }
    }; */
  }

  playCard() {
    this.audioFile = this.el.querySelector('audio');
    this.audioFile.play();
  }

  /* hideElement() {
    console.log('hide');
    this.element = this.el.querySelector('.card__info');
    console.log(this.element);
    this.element.style.display = 'none';
  } */

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
