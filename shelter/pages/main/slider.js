let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.pets__slider__container');
const track = document.querySelector('.pets__slider__cards');
const btnPrev = document.querySelector('.pets__slider__arrow__backward');
const btnNext = document.querySelector('.pets__slider__arrow__forward');
const items = document.querySelectorAll('.pets__slider__cards__card');
const itemsCount = items.length;
let itemWidth = 1;

if (container.clientWidth >= 1080) {
    itemWidth = 270 + 90;
} else if (container.clientWidth < 1080 && container.clientWidth >= 604) {
    itemWidth = 270 + 24;
}

const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    console.log('itemsLeft ' + itemsLeft + ' slidesToScroll ' + slidesToScroll);
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    console.log('itemsLeft ' + itemsLeft + ' slidesToScroll ' + slidesToScroll);
    position += itemsLeft != slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    console.log(' ');
    console.log('container.clientWidth ' + container.clientWidth);
    console.log('itemWidth ' + itemWidth);
    console.log('position ' + position);

    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth;
}

checkBtns();