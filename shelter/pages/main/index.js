let pets = []; // 8
let fullPetsList = []; // 48
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.onload = () => { }; /* в фигурные скобки добавить  console.log(request.response) */
fetch('./pets.json').then(res => res.json()).then(list => {
  pets = list;

  fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();

  fullPetsList = sort863(fullPetsList);
  console.log(fullPetsList);
  createPets(fullPetsList);



  for (let i = 0; i < (fullPetsList.length / 6); i++) {
    const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      stepList.forEach((item, ind) => {
        if (item.name === stepList[j].name && (ind !== j)) {
          document.querySelector("#pets").children[(i * 6) + j].style.border = '5px solid red';
        }
      })
    }
  }
})


const createPets = (petsList) => {
  const elem = document.querySelector("#pets");
  elem.innerHTML += createElements(petsList);
}

let petPosition = 0

createElements = (petsList) => {
  let startPetPosition = petPosition;
  let str = '';
  for (let i = 0; i < itemsPerPage; i++) {
    str += `<div class="pets__slider__cards__card" onclick="openPopup(${startPetPosition})">
              <div class="pets__slider__cards__item">
                <div class="pets__slider__cards__card__img">
                  <img src="../../${petsList[startPetPosition].img}" alt="${petsList[startPetPosition].name}">
                </div>
                <div class="pets__slider__cards__card__text">
                  <div class="pets__slider__cards__card__title">
                    ${petsList[startPetPosition].name}
                  </div>
                  <div class=pets__slider__cards__card__btn>
                    <button class="pets__slider__cards__card__button" type="button">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>`;

    startPetPosition += 1;


  }
  console.log(startPetPosition);
  return str;
}


request.send();

const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;


  list = sort6recursively(list);

  return list;
}

const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < (length / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });

      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
}

let currentPage = 0;

document.querySelector("#prevPage").addEventListener('click', (e) => {
  if (petPosition === 0) {
    petPosition = fullPetsList.length;
  }
  currentPage--;
  removePets();
  petPosition -= itemsPerPage;
  createPets(fullPetsList);

});

document.querySelector("#nextPage").addEventListener('click', (e) => {
  if (petPosition === fullPetsList.length) {
    petPosition = 0;
  }
  console.log("нажал вперед");
  currentPage++;
  removePets();
  petPosition += itemsPerPage;
  createPets(fullPetsList);

});



let itemsPerPage = 3;

const checkItemsPerPage = () => {

  if (document.querySelector("body").offsetWidth >= 1280) {

    if (itemsPerPage !== 3) {
      itemsPerPage = 3;
      removePets();
      createPets(fullPetsList);
    }
    itemsPerPage = 3;
  } else if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
    if (itemsPerPage !== 2) {
      itemsPerPage = 2;
      removePets();
      createPets(fullPetsList);
    }

  } else {
    if (itemsPerPage !== 1) {
      itemsPerPage = 1;
      removePets();
      createPets(fullPetsList);
    }
  }


  setTimeout(checkItemsPerPage, 1000);
}


const removePets = () => {
  const myNode = document.getElementById("pets");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

const openPopup = (petsIndex) => {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
  const modalImg = document.querySelector(".modal__window__img");
  modalImg.innerHTML = `<img src="../.${fullPetsList[petsIndex].img}" alt="">`;
  const name = document.querySelector(".modal__window__content__pet_name");
  name.textContent = `${fullPetsList[petsIndex].name}`;
  const breed = document.querySelector(".modal__window__content__pet_type_breed");
  breed.textContent = `${fullPetsList[petsIndex].type} - ${fullPetsList[petsIndex].breed}`;
  const description = document.querySelector(".modal__window__content__pet_description");
  description.textContent = `${fullPetsList[petsIndex].description}`;
  const age = document.querySelector(".modal__window__content__pet_age");
  age.innerHTML = `<img src="../../assets/icons/dot.svg" alt="dot"><span class="pet__list__title__age">Age:</span><p>${fullPetsList[petsIndex].age}</p>`;
  const inoculations = document.querySelector(".modal__window__content__pet_inoculations");
  inoculations.innerHTML = `<img src="../../assets/icons/dot.svg" alt="dot"><span class="pet__list__title__inoculations">Inoculations:</span><p>${fullPetsList[petsIndex].inoculations}</p>`;
  const diseases = document.querySelector(".modal__window__content__pet_diseases");
  diseases.innerHTML = `<img src="../../assets/icons/dot.svg" alt="dot"><span class="pet__list__title__diseases">Diseases: </span><p>${fullPetsList[petsIndex].diseases}</p>`;
  const parasites = document.querySelector(".modal__window__content__pet_parasites");
  parasites.innerHTML = `<img src="../../assets/icons/dot.svg" alt="dot"><span class="pet__list__title__parasites">Parasites: </span><p>${fullPetsList[petsIndex].parasites}</p>`;
}

// Get the modal
let modal = document.querySelector('#myModal');

// Get the <span> element that closes the modal
let close = document.querySelector('.modal__button__close');

// When the user clicks on button, close the modal
close.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
modal.onclick = function () {
  modal.style.display = "none";
}

const checkSizeWindow = () => {
  setTimeout(checkSizeWindow, 1000);
  // console.log(document.querySelector("body").offsetWidth);
}

let burger = document.querySelector("#check_menu");
const checkBurger = function () {
  if (burger.checked == true) {
    document.body.classList.add('onClickBurger');
  } else {
    document.body.classList.remove("onClickBurger");
  }
}

let linkTop = document.querySelector(".closeBurger");

linkTop.onclick = function () {
  burger.checked = false;
  checkBurger();
}

burger.onclick = function () {
  checkBurger();
}


checkItemsPerPage();
checkSizeWindow();





