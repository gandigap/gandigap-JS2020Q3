class Main {
  constructor() {
    console.log('Hello from JavaScript!');

  }
}






const main = new Main();
window.main = main;

const divPuz = document.createElement('div');
divPuz.id = 'puzzle-wrapper';
const body = document.querySelector('body');
divPuz.append(document.createElement('div'));
body.append(divPuz);

const divModal = document.createElement('div');
body.append(divModal);
divModal.innerHTML = `<div id="success-modal" class="modal-wrapper" style="display: none">
                        <div class="modal">
                          <div class="head">
                            <a class="btn-close trigger" href="#">
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </a>
                          </div>
                        <div class="content">
                          <div class="good-job">
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            <h3></h3>
                            </div>
                          </div>
                        </div>
                      </div>`;

const divMenu = document.createElement('div');
body.append(divMenu);
divMenu.innerHTML = `<div class="menu">
                      <button class="game">Play</button>
                      <button class="reset">
                        <img class="img_reset" src="assets/icons/refresh.png" alt="">
                      </button>
                      <div class="time">Time: 0 s</div>
                      <div class="step">Steps: 0</div>
                      <div class="template">
                        <button class="minus">-</button>
                        <div class="template_text">4×4</div>
                        <button class="plus">+</button>
                      </div>
                      <button class="sound">
                        <img class="img_volume" src="assets/icons/volume.png" alt="">
                      </button>
                      <audio id='audio' src="assets/sounds/shift.mp3"></audio>
                    </div>`;



