
import PicturePuzzle from './PicturePuzzle.js';
let isStartGame = false;
let template = 4;
let steps = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let widthPuz = 340;

if (document.querySelector("body").offsetWidth >= 1280) {
    widthPuz = 800;
} else if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
    widthPuz = 600;
}


const body = document.querySelector('body');
const puzl_wrapper = document.querySelector('#puzzle-wrapper');
const buttonPlay = document.querySelector('.game');
const buttonReset = document.querySelector('.reset');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
const stepsInfo = document.querySelector(".step");
stepsInfo.textContent = `Steps: 0`;
const timeInfo = document.querySelector(".time");
timeInfo.textContent = `Time: 0 `;
const finishtitle = document.querySelector('h3');


let picturePuzzle = new PicturePuzzle(
    document.querySelectorAll('#puzzle-wrapper > div')[0],
    './assets/images/game.jpg',
    widthPuz,
    template
);

picturePuzzle.onSwap = function (movements) {
    console.log(movements);
    steps = movements;
    stepsInfo.textContent = `Steps: ${movements}`;
    playSound();
};

picturePuzzle.onFinished = function () {
    console.log("Show good job dialog");

    setTimeout(() => {
        modal.classList.add('open');
        finishtitle.textContent = `Ура! Вы решили головоломку за ${hours}:${minutes}:${seconds} и ${steps} ходов`;
        this.el.classList.add('blur-it')
    }, 500);
    /*  modal.querySelector('.trigger').onclick = () => {
         modal.classList.remove('open');
         this.el.classList.remove('blur-it');
     } */

};

let isPuzzleShow = false;

buttonPlay.onclick = function () {

    const puzzle = document.querySelector("#puzzle-wrapper");
    puzzle.style.transition = "1s";
    if (isPuzzleShow) {
        isPuzzleShow = false;
        buttonPlay.textContent = 'Play';
        puzzle.style.opacity = "0";
    } else {
        isPuzzleShow = true;
        buttonPlay.textContent = 'Stop';
        puzzle.style.opacity = "1";
    }
    if (isStartGame) {
        isStartGame = false;
    } else {
        isStartGame = true;
    }

    countTime();
}



buttonReset.onclick = function () {

    const templ_text = document.querySelector(".template_text");
    stepsInfo.textContent = `Steps: 0`;

    const elem = document.querySelector(".puzzle");
    elem.parentNode.removeChild(elem);

    templ_text.textContent = `${template}×${template}`;

    picturePuzzle = new PicturePuzzle(
        document.querySelectorAll('#puzzle-wrapper > div')[0],
        './assets/images/game.jpg',
        widthPuz,
        template
    );
    picturePuzzle.onSwap = function (movements) {
        steps = movements;
        console.log(movements);
        stepsInfo.textContent = `Steps: ${movements}`;
        playSound();
    };

    picturePuzzle.onFinished = function () {
        console.log("Show good job dialog");

        setTimeout(() => {
            modal.classList.add('open');
            finishtitle.textContent = `Ура! Вы решили головоломку за ${hours}:${minutes}:${seconds} и ${steps} ходов`;
            this.el.classList.add('blur-it')
        }, 500);
        /*  modal.querySelector('.trigger').onclick = () => {
             modal.classList.remove('open');
             this.el.classList.remove('blur-it');
         } */

    };
    nullTime();
}


buttonPlus.onclick = function () {
    if (template < 8) {
        const templ_text = document.querySelector(".template_text");
        stepsInfo.textContent = `Steps: 0`;

        const elem = document.querySelector(".puzzle");
        elem.parentNode.removeChild(elem);
        template += 1;
        templ_text.textContent = `${template}×${template}`;

        picturePuzzle = new PicturePuzzle(
            document.querySelectorAll('#puzzle-wrapper > div')[0],
            './assets/images/game.jpg',
            widthPuz,
            template
        );
        picturePuzzle.onSwap = function (movements) {
            steps = movements;
            console.log(movements);
            stepsInfo.textContent = `Steps: ${movements}`;
            playSound();
        };

        picturePuzzle.onFinished = function () {
            console.log("Show good job dialog");

            setTimeout(() => {
                modal.classList.add('open');
                finishtitle.textContent = `Ура! Вы решили головоломку за ${hours}:${minutes}:${seconds} и ${steps} ходов`;
                this.el.classList.add('blur-it')
            }, 500);
            /*  modal.querySelector('.trigger').onclick = () => {
                 modal.classList.remove('open');
                 this.el.classList.remove('blur-it');
             } */

        };
    }
    nullTime();
}

buttonMinus.onclick = function () {
    if (template > 2) {
        const templ_text = document.querySelector(".template_text");
        stepsInfo.textContent = `Steps: 0`;

        const elem = document.querySelector(".puzzle");
        elem.parentNode.removeChild(elem);
        template -= 1;
        templ_text.textContent = `${template}×${template}`;
        picturePuzzle = new PicturePuzzle(
            document.querySelectorAll('#puzzle-wrapper > div')[0],
            './assets/images/game.jpg',
            widthPuz,
            template
        );

        picturePuzzle.onSwap = function (movements) {
            steps = movements;
            console.log(movements);
            stepsInfo.textContent = `Steps: ${movements}`;
            playSound();
        };

        picturePuzzle.onFinished = function () {
            console.log("Show good job dialog");

            setTimeout(() => {
                modal.classList.add('open');
                finishtitle.textContent = `Ура! Вы решили головоломку за ${hours}ч:${minutes}м:${seconds}с и ${steps} ходa`;
                this.el.classList.add('blur-it')
            }, 500);
            /*  modal.querySelector('.trigger').onclick = () => {
                 modal.classList.remove('open');
                 this.el.classList.remove('blur-it');
             } */

        };
    }
    nullTime();
}



/* const picturePuzzle2 = new PicturePuzzle(
    document.querySelectorAll('#puzzle-wrapper > div')[1],
    'https://www.tesla.com/sites/default/files/images/homepage/20180710/ms/homepage-models.jpg?20181117',
    600,
    4
); */


const modal = document.querySelector('#success-modal');
modal.style.display = 'block';



function nullTime() {
    seconds = 0;
    minutes = 0;
    hours = 0;
}

function countTime() {

    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }

    if (hours === 24) {
        seconds = 0;
        minutes = 0;
        hours = 0;
    }

    timeInfo.textContent = `Time| ${hours}:${minutes}:${seconds}`
    if (isStartGame) {

        window.clearTimeout();
        setTimeout(countTime, 1000);
    }
}



/* sound  */
let isSoundOn = true;

const playSound = (event) => {
    if (isSoundOn) {
        let audio = document.querySelector(`#audio`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    }

};

const sound = document.querySelector('.sound');
const image = document.createElement('img');
image.classList.add('img_volume');

sound.onclick = function () {
    if (isSoundOn) {
        isSoundOn = false;
        const elem = document.querySelector(".img_volume");
        elem.parentNode.removeChild(elem);
        sound.append(image);
        image.src = "assets/icons/mute.png";

    } else {
        isSoundOn = true;
        const elem = document.querySelector(".img_volume");
        elem.parentNode.removeChild(elem);
        sound.append(image);
        image.src = "assets/icons/volume.png";
    }
    console.log(isSoundOn);
}