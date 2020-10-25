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

  document.querySelector("#currentPage").innerText = (currentPage + 1).toString();

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
// request.onload = () => {
//   pets = JSON.parse(request.response);





// }

const createPets = (petsList) => {
  const elem = document.querySelector("#pets");
  elem.innerHTML += createElements(petsList);
}

let petPosition = 0

createElements = (petsList) => {
  let startPetPosition = petPosition;
  let str = '';
  for (let i = 0; i < itemsPerPage; i++) {
    str += `<div class="pets__slider__cards__card">
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

document.querySelector("#firstPage").addEventListener('click', (e) => {
  currentPage = 0;
  removePets();
  petPosition = 0;
  createPets(fullPetsList);
  document.querySelector("#currentPage").innerText = (currentPage + 1).toString();
  checkBtns();
});

document.querySelector("#prevPage").addEventListener('click', (e) => {
  currentPage--;
  removePets();
  petPosition -= itemsPerPage;
  createPets(fullPetsList);
  document.querySelector("#currentPage").innerText = (currentPage + 1).toString();
  checkBtns();
});

document.querySelector("#nextPage").addEventListener('click', (e) => {
  currentPage++;
  removePets();
  petPosition += itemsPerPage;
  createPets(fullPetsList);
  document.querySelector("#currentPage").innerText = (currentPage + 1).toString();
  checkBtns();
});

document.querySelector("#lastPage").addEventListener('click', (e) => {
  currentPage = (fullPetsList.length / itemsPerPage) - 1;
  removePets();
  petPosition = (fullPetsList.length - itemsPerPage) - 1;
  createPets(fullPetsList);
  document.querySelector("#currentPage").innerText = (currentPage + 1).toString();
  checkBtns();
});

let itemsPerPage = 8;

const checkBtns = () => {
  document.querySelector("#prevPage").disabled = currentPage === 0;
  document.querySelector("#nextPage").disabled = currentPage + 1 === (fullPetsList.length / itemsPerPage);
  document.querySelector("#firstPage").disabled = currentPage === 0;
  document.querySelector("#lastPage").disabled = currentPage + 1 === (fullPetsList.length / itemsPerPage);
  console.log(itemsPerPage);
}

checkBtns();


// (fullPetsList / itemsPerPage)



const checkItemsPerPage = () => {
  if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
    itemsPerPage = 6;
  } else {
    itemsPerPage = 3;
  }


  // setTimeout(checkItemsPerPage, 3000);
}


const removePets = () => {
  const myNode = document.getElementById("pets");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

checkItemsPerPage();



