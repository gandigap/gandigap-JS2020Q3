!function(s){function a(a){for(var t,i,n=a[0],c=a[1],d=a[2],m=0,u=[];m<n.length;m++)i=n[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(s[t]=c[t]);for(l&&l(a);u.length;)u.shift()();return r.push.apply(r,d||[]),e()}function e(){for(var s,a=0;a<r.length;a++){for(var e=r[a],t=!0,n=1;n<e.length;n++){var c=e[n];0!==o[c]&&(t=!1)}t&&(r.splice(a--,1),s=i(i.s=e[0]))}return s}var t={},o={0:0},r=[];function i(a){if(t[a])return t[a].exports;var e=t[a]={i:a,l:!1,exports:{}};return s[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=s,i.c=t,i.d=function(s,a,e){i.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:e})},i.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,a){if(1&a&&(s=i(s)),8&a)return s;if(4&a&&"object"==typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&a&&"string"!=typeof s)for(var t in s)i.d(e,t,function(a){return s[a]}.bind(null,t));return e},i.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(a,"a",a),a},i.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},i.p="";var n=window.webpackJsonp=window.webpackJsonp||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var d=0;d<n.length;d++)a(n[d]);var l=c;r.push([71,1]),e()}({65:function(s,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return o}));e(66);function t(s,a){for(var e=0;e<a.length;e++){var t=a[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}var o=function(){function s(a,e,t){!function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(this,s);var o=document.querySelector(e);this.el=document.createElement(a),this.el.classList.add(t),o.appendChild(this.el)}var a,e,o;return a=s,(e=[{key:"createCard",value:function(s,a,e,t){this.el.innerHTML='<div class="card__content" id="'.concat(s,'">\n                          <div class="card__content__front ">\n                            <figure class="card__img">\n                              <img class="image" src="').concat(e,'" alt="').concat(s,'">\n                              <figcaption></figcaption>\n                          </figure>\n                            <div class="card__info">\n                              <p class="card__info__text">').concat(s,'</p>\n                              <button class="flip_button" id="flip_button__').concat(s,'">\n                                <img class="flip_button__img" src="assets/icons/flip.png" alt="Flip">\n                              </button>\n                            </div>\n                            <audio src="').concat(t,'"></audio>\n                          </div>\n                          <div class="card__content__back">\n                            <figure class="card__img">\n                              <img class="image" src="').concat(e,'" alt="').concat(a,'">\n                              <figcaption></figcaption>\n                          </figure>\n                            <div class="card__info">\n                              <p class="card__info__text">').concat(a,"</p>\n                            </div>\n                          </div>\n                        </div>")}}])&&t(a.prototype,e),o&&t(a,o),s}()},67:function(s,a,e){var t=e(37),o=e(68);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[s.i,o,""]]);var r={insert:"head",singleton:!1};t(o,r);s.exports=o.locals||{}},68:function(s,a,e){},69:function(s,a,e){var t=e(37),o=e(70);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[s.i,o,""]]);var r={insert:"head",singleton:!1};t(o,r);s.exports=o.locals||{}},70:function(s,a,e){},71:function(s,a,e){"use strict";e.r(a);e(38),e(61),e(63);var t=[[{nameCategory:"categories"},{word:"Animals",translation:"Животные",image:"assets/images/categories/animals.jpg",audioSrc:"assets/sounds/categories/click.mp3"},{word:"Clothes",translation:"Одежда",image:"assets/images/categories/clothes.jpg",audioSrc:"assets/sounds/categories/click.mp3"},{word:"Occupations",translation:"Профессии",image:"assets/images/categories/occupations.jpg",audioSrc:"assets/sounds/categories/click.mp3"},{word:"Places",translation:"Места",image:"assets/images/categories/places.jpg",audioSrc:"assets/sounds/categories/click.mp3"},{word:"Space",translation:"Космос",image:"assets/images/categories/space.jpg",audioSrc:"assets/sounds/categories/click.mp3"},{word:"Transport",translation:"Транспорт",image:"assets/images/categories/transport.jpg",audioSrc:"assets/sounds/categories/click.mp3"},{word:"Vegetables",translation:"Овощи",image:"assets/images/categories/vegetables.jpg",audioSrc:"assets/sounds/categories/click.mp3"},{word:"Clothes",translation:"Одежда",image:"assets/images/categories/weather.jpg",audioSrc:"assets/sounds/categories/click.mp3"}],[{nameCategory:"animals"},{word:"cat",translation:"кот",image:"assets/images/animals/cat.jpg",audioSrc:"assets/sounds/animals/cat.mp3"},{word:"cow",translation:"корова",image:"assets/images/animals/cow.jpg",audioSrc:"assets/sounds/animals/cow.mp3"},{word:"deer",translation:"олень",image:"assets/images/animals/deer.jpg",audioSrc:"assets/sounds/animals/deer.mp3"},{word:"dog",translation:"собака",image:"assets/images/animals/dog.jpg",audioSrc:"assets/sounds/animals/dog.mp3"},{word:"hippo",translation:"бегемот",image:"assets/images/animals/hippo.jpg",audioSrc:"assets/sounds/animals/hippo.mp3"},{word:"horse",translation:"лошадь",image:"assets/images/animals/horse.jpg",audioSrc:"assets/sounds/animals/horse.mp3"},{word:"kangaroo",translation:"кенгуру",image:"assets/images/animals/kangaroo.jpg",audioSrc:"assets/sounds/animals/kangaroo.mp3"},{word:"koala",translation:"коала",image:"assets/images/animals/koala.jpg",audioSrc:"assets/sounds/animals/koala.mp3"},{word:"monkey",translation:"обезьяна",image:"assets/images/animals/monkey.jpg",audioSrc:"assets/sounds/animals/monkey.mp3"},{word:"moose",translation:"лось",image:"assets/images/animals/moose.jpg",audioSrc:"assets/sounds/animals/moose.mp3"},{word:"mouse",translation:"мышь",image:"assets/images/animals/mouse.jpg",audioSrc:"assets/sounds/animals/mouse.mp3"},{word:"pig",translation:"свинья",image:"assets/images/animals/pig.jpg",audioSrc:"assets/sounds/animals/pig.mp3"},{word:"seal",translation:"тюлень",image:"assets/images/animals/seal.jpg",audioSrc:"assets/sounds/animals/seal.mp3"},{word:"sheep",translation:"овца",image:"assets/images/animals/sheep.jpg",audioSrc:"assets/sounds/animals/sheep.mp3"},{word:"turtle",translation:"черепаха",image:"assets/images/animals/turtle.jpg",audioSrc:"assets/sounds/animals/turtle.mp3"},{word:"walrus",translation:"морж",image:"assets/images/animals/walrus.jpg",audioSrc:"assets/sounds/animals/walrus.mp3"}],[{nameCategory:"clothes"},{word:"belt",translation:"ремень",image:"assets/images/clothes/belt.jpg",audioSrc:"assets/sounds/clothes/belt.mp3"},{word:"blouse",translation:"блузка",image:"assets/images/clothes/blouse.jpg",audioSrc:"assets/sounds/clothes/blouse.mp3"},{word:"cap",translation:"кепка",image:"assets/images/clothes/cap.jpg",audioSrc:"assets/sounds/clothes/cap.mp3"},{word:"dress",translation:"платье",image:"assets/images/clothes/dress.jpg",audioSrc:"assets/sounds/clothes/dress.mp3"},{word:"gloves",translation:"перчатки",image:"assets/images/clothes/gloves.jpg",audioSrc:"assets/sounds/clothes/gloves.mp3"},{word:"hoodie",translation:"худи",image:"./assets/images/clothes/hoodie.jpg",audioSrc:"./assets/sounds/clothes/hoodie.mp3"},{word:"mittens",translation:"рукавицы",image:"./assets/images/clothes/mittens.jpg",audioSrc:"./assets/sounds/clothes/mittens.mp3"},{word:"sandals",translation:"сандали",image:"assets/images/clothes/sandals.jpg",audioSrc:"assets/sounds/clothes/sandals.mp3"},{word:"scarf",translation:"шарф",image:"assets/images/clothes/scarf.jpg",audioSrc:"assets/sounds/clothes/scarf.mp3"},{word:"shoes",translation:"туфли",image:"assets/images/clothes/shoes.jpg",audioSrc:"assets/sounds/clothes/shoes.mp3"},{word:"shorts",translation:"шорты",image:"assets/images/clothes/shorts.jpg",audioSrc:"assets/sounds/clothes/shorts.mp3"},{word:"skirt",translation:"юбка",image:"assets/images/clothes/skirt.jpg",audioSrc:"assets/sounds/clothes/skirt.mp3"},{word:"slippers",translation:"тапочик",image:"assets/images/clothes/slippers.jpg",audioSrc:"assets/sounds/clothes/slippers.mp3"},{word:"sneaker",translation:"кроссовки",image:"assets/images/clothes/sneaker.jpg",audioSrc:"assets/sounds/clothes/sneaker.mp3"},{word:"suit",translation:"костюм",image:"assets/images/clothes/suit.jpg",audioSrc:"assets/sounds/clothes/suit.mp3"},{word:"sweater",translation:"свитер",image:"assets/images/clothes/sweater.jpg",audioSrc:"assets/sounds/clothes/sweater.mp3"}],[{nameCategory:"occupations"},{word:"artist",translation:"артист",image:"assets/images/occupations/artist.jpg",audioSrc:"assets/sounds/occupations/artist.mp3"},{word:"cashier",translation:"кассир",image:"assets/images/occupations/cashier.jpg",audioSrc:"assets/sounds/occupations/cashier.mp3"},{word:"cock",translation:"повар",image:"assets/images/occupations/cock.jpg",audioSrc:"assets/sounds/occupations/cock.mp3"},{word:"doctor",translation:"доктор",image:"assets/images/occupations/doctor.jpg",audioSrc:"assets/sounds/occupations/doctor.mp3"},{word:"engineer",translation:"инженер",image:"assets/images/occupations/engineer.jpg",audioSrc:"assets/sounds/occupations/engineer.mp3"},{word:"farmer",translation:"фермер",image:"assets/images/occupations/farmer.jpg",audioSrc:"assets/sounds/occupations/farmer.mp3"},{word:"fireman",translation:"пожарный",image:"assets/images/occupations/fireman.jpg",audioSrc:"assets/sounds/occupations/fireman.mp3"},{word:"judge",translation:"судья",image:"assets/images/occupations/judge.jpg",audioSrc:"assets/sounds/occupations/judge.mp3"},{word:"musician",translation:"музыкант",image:"assets/images/occupations/musician.jpg",audioSrc:"assets/sounds/occupations/musician.mp3"},{word:"nurse",translation:"медсестра",image:"assets/images/occupations/nurse.jpg",audioSrc:"assets/sounds/occupations/nurse.mp3"},{word:"painter",translation:"художник",image:"assets/images/occupations/painter.jpg",audioSrc:"assets/sounds/occupations/painter.mp3"},{word:"pilot",translation:"пилот",image:"assets/images/occupations/pilot.jpg",audioSrc:"assets/sounds/occupations/pilot.mp3"},{word:"policeman",translation:"полицейский",image:"assets/images/occupations/policeman.jpg",audioSrc:"assets/sounds/occupations/policeman.mp3"},{word:"reporter",translation:"репортер",image:"assets/images/occupations/reporter.jpg",audioSrc:"assets/sounds/occupations/reporter.mp3"},{word:"painter",translation:"художник",image:"assets/images/occupations/painter.jpg",audioSrc:"assets/sounds/occupations/painter.mp3"},{word:"teacher",translation:"учитель",image:"assets/images/occupations/teacher.jpg",audioSrc:"assets/sounds/occupations/teacher.mp3"},{word:"waiter",translation:"официант",image:"assets/images/occupations/waiter.jpg",audioSrc:"assets/sounds/occupations/waiter.mp3"}],[{nameCategory:"places"},{word:"airport",translation:"аэропорт",image:"assets/images/places/airport.jpg",audioSrc:"assets/sounds/places/airport.mp3"},{word:"bakery",translation:"пекарня",image:"assets/images/places/bakery.jpg",audioSrc:"assets/sounds/places/bakery.mp3"},{word:"bank",translation:"банк",image:"assets/images/places/bank.jpg",audioSrc:"assets/sounds/places/bank.mp3"},{word:"bookstore",translation:"книжная лавка",image:"assets/images/places/bookstore.jpg",audioSrc:"assets/sounds/places/bookstore.mp3"},{word:"church",translation:"церковь",image:"assets/images/places/church.jpg",audioSrc:"assets/sounds/places/church.mp3"},{word:"cinema",translation:"кинотеатр",image:"assets/images/places/cinema.jpg",audioSrc:"assets/sounds/places/cinema.mp3"},{word:"farm",translation:"аэропорт",image:"assets/images/places/farm.jpg",audioSrc:"assets/sounds/places/farm.mp3"},{word:"hospital",translation:"больница",image:"assets/images/places/hospital.jpg",audioSrc:"assets/sounds/places/hospital.mp3"},{word:"hotel",translation:"отель",image:"assets/images/places/hotel.jpg",audioSrc:"assets/sounds/places/hotel.mp3"},{word:"museum",translation:"музей",image:"assets/images/places/museum.jpg",audioSrc:"assets/sounds/places/museum.mp3"},{word:"park",translation:"парк",image:"assets/images/places/park.jpg",audioSrc:"assets/sounds/places/park.mp3"},{word:"restaurant",translation:"ресторан",image:"assets/images/places/restaurant.jpg",audioSrc:"assets/sounds/places/restaurant.mp3"},{word:"school",translation:"школа",image:"assets/images/places/school.jpg",audioSrc:"assets/sounds/places/school.mp3"},{word:"supermarket",translation:"супермаркет",image:"assets/images/places/supermarket.jpg",audioSrc:"assets/sounds/places/supermarket.mp3"},{word:"theater",translation:"театр",image:"assets/images/places/theater.jpg",audioSrc:"assets/sounds/places/theater.mp3"},{word:"zoo",translation:"зоопарк",image:"assets/images/places/zoo.jpg",audioSrc:"assets/sounds/places/zoo.mp3"}],[{nameCategory:"space"},{word:"alien",translation:"инопланетянин",image:"assets/images/space/alien.jpg",audioSrc:"assets/sounds/space/alien.mp3"},{word:"astronaut",translation:"астронавт",image:"assets/images/space/astronaut.jpg",audioSrc:"assets/sounds/space/astronaut.mp3"},{word:"earth",translation:"Земля",image:"assets/images/space/earth.jpg",audioSrc:"assets/sounds/space/earth.mp3"},{word:"jupiter",translation:"Юпитер",image:"assets/images/space/jupiter.jpg",audioSrc:"assets/sounds/space/jupiter.mp3"},{word:"mars",translation:"Марс",image:"assets/images/space/mars.jpg",audioSrc:"assets/sounds/space/mars.mp3"},{word:"mercury",translation:"Меркурий",image:"assets/images/space/mercury.jpg",audioSrc:"assets/sounds/space/mercury.mp3"},{word:"meteorite",translation:"метеорит",image:"assets/images/space/meteorite.jpg",audioSrc:"assets/sounds/space/meteorite.mp3"},{word:"moon",translation:"Луна",image:"assets/images/space/moon.jpg",audioSrc:"assets/sounds/space/moon.mp3"},{word:"neptune",translation:"Нептун",image:"assets/images/space/neptune.jpg",audioSrc:"assets/sounds/space/neptune.mp3"},{word:"rocket",translation:"ракета",image:"assets/images/space/rocket.jpg",audioSrc:"assets/sounds/space/rocket.mp3"},{word:"satellite",translation:"спутник",image:"assets/images/space/satellite.jpg",audioSrc:"assets/sounds/space/satellite.mp3"},{word:"saturn",translation:"Сатурн",image:"assets/images/space/saturn.jpg",audioSrc:"assets/sounds/space/saturn.mp3"},{word:"spaceship",translation:"космический корабль",image:"assets/images/space/spaceship.jpg",audioSrc:"assets/sounds/space/spaceship.mp3"},{word:"sun",translation:"Солнце",image:"assets/images/space/sun.jpg",audioSrc:"assets/sounds/space/sun.mp3"},{word:"telescope",translation:"телескоп",image:"assets/images/space/telescope.jpg",audioSrc:"assets/sounds/space/telescope.mp3"},{word:"venus",translation:"Венера",image:"assets/images/space/venus.jpg",audioSrc:"assets/sounds/space/venus.mp3"}],[{nameCategory:"transport"},{word:"airplane",translation:"аэропорт",image:"assets/images/transport/airplane.jpg",audioSrc:"assets/sounds/transport/airplane.mp3"},{word:"ambulance",translation:"скорая помощь",image:"assets/images/transport/ambulance.jpg",audioSrc:"assets/sounds/transport/ambulance.mp3"},{word:"ballon",translation:"воздушный шар",image:"assets/images/transport/balloon.jpg",audioSrc:"assets/sounds/transport/balloon.mp3"},{word:"boat",translation:"лодка",image:"assets/images/transport/boat.jpg",audioSrc:"assets/sounds/transport/boat.mp3"},{word:"bus",translation:"автобус",image:"assets/images/transport/bus.jpg",audioSrc:"assets/sounds/transport/bus.mp3"},{word:"bycicle",translation:"велосипед",image:"assets/images/transport/bycicle.jpg",audioSrc:"assets/sounds/transport/bycicle.mp3"},{word:"car",translation:"машина",image:"assets/images/transport/car.jpg",audioSrc:"assets/sounds/transport/car.mp3"},{word:"carriage",translation:"вагон",image:"assets/images/transport/carriage.jpg",audioSrc:"assets/sounds/transport/carriage.mp3"},{word:"helicopter",translation:"вертолет",image:"assets/images/transport/helicopter.jpg",audioSrc:"assets/sounds/transport/helicopter.mp3"},{word:"ropeway",translation:"канатная дорога",image:"assets/images/transport/ropeway.jpg",audioSrc:"assets/sounds/transport/ropeway.mp3"},{word:"scooter",translation:"скутер",image:"assets/images/transport/scooter.jpg",audioSrc:"assets/sounds/transport/scooter.mp3"},{word:"taxi",translation:"такси",image:"assets/images/transport/taxi.jpg",audioSrc:"assets/sounds/transport/taxi.mp3"},{word:"train",translation:"поезд",image:"assets/images/transport/train.jpg",audioSrc:"assets/sounds/transport/train.mp3"},{word:"truck",translation:"грузовик",image:"assets/images/transport/truck.jpg",audioSrc:"assets/sounds/transport/truck.mp3"},{word:"van",translation:"фургон",image:"assets/images/transport/van.jpg",audioSrc:"assets/sounds/transport/van.mp3"},{word:"yacht",translation:"яхта",image:"assets/images/transport/yacht.jpg",audioSrc:"assets/sounds/transport/yacht.mp3"}],[{nameCategory:"vegetables"},{word:"cabbage",translation:"капуста",image:"assets/images/vegetables/cabbage.jpg",audioSrc:"assets/sounds/vegetables/cabbage.mp3"},{word:"carrot",translation:"морковь",image:"assets/images/vegetables/carrot.jpg",audioSrc:"assets/sounds/vegetables/carrot.mp3"},{word:"corn",translation:"зерно",image:"assets/images/vegetables/corn.jpg",audioSrc:"assets/sounds/vegetables/corn.mp3"},{word:"cucumber",translation:"огурец",image:"assets/images/vegetables/cucumber.jpg",audioSrc:"assets/sounds/vegetables/cucumber.mp3"},{word:"eggplant",translation:"баклажан",image:"assets/images/vegetables/eggplant.jpg",audioSrc:"assets/sounds/vegetables/eggplant.mp3"},{word:"garlic",translation:"чеснок",image:"assets/images/vegetables/garlic.jpg",audioSrc:"assets/sounds/vegetables/garlic.mp3"},{word:"lettuce",translation:"салат",image:"assets/images/vegetables/lettuce.jpg",audioSrc:"assets/sounds/vegetables/lettuce.mp3"},{word:"mushrooms",translation:"грибы",image:"assets/images/vegetables/mushrooms.jpg",audioSrc:"assets/sounds/vegetables/mushrooms.mp3"},{word:"olive",translation:"оливы",image:"assets/images/vegetables/olive.jpg",audioSrc:"assets/sounds/vegetables/olive.mp3"},{word:"onion",translation:"лук",image:"assets/images/vegetables/onion.jpg",audioSrc:"assets/sounds/vegetables/onion.mp3"},{word:"peas",translation:"горох",image:"assets/images/vegetables/peas.jpg",audioSrc:"assets/sounds/vegetables/peas.mp3"},{word:"pepper",translation:"перец",image:"assets/images/vegetables/pepper.jpg",audioSrc:"assets/sounds/vegetables/pepper.mp3"},{word:"potato",translation:"картофель",image:"assets/images/vegetables/potato.jpg",audioSrc:"assets/sounds/vegetables/potato.mp3"},{word:"pumpkin",translation:"тыква",image:"assets/images/vegetables/pumpkin.jpg",audioSrc:"assets/sounds/vegetables/pumpkin.mp3"},{word:"radishes",translation:"редька",image:"assets/images/vegetables/radishes.jpg",audioSrc:"assets/sounds/vegetables/radishes.mp3"},{word:"tomato",translation:"помидор",image:"assets/images/vegetables/tomato.jpg",audioSrc:"assets/sounds/vegetables/tomato.mp3"}],[{nameCategory:"weather"},{word:"avalanche",translation:"лавина",image:"assets/images/weather/avalanche.jpg",audioSrc:"assets/sounds/weather/avalanche.mp3"},{word:"cloudy",translation:"облачно",image:"assets/images/weather/cloudy.jpg",audioSrc:"assets/sounds/weather/cloudy.mp3"},{word:"cold",translation:"холодно",image:"assets/images/weather/cold.jpg",audioSrc:"assets/sounds/weather/cold.mp3"},{word:"drought",translation:"засуха",image:"assets/images/weather/drought.jpg",audioSrc:"assets/sounds/weather/drought.mp3"},{word:"earthquake",translation:"землетрясение",image:"assets/images/weather/earthquake.jpg",audioSrc:"assets/sounds/weather/earthquake.mp3"},{word:"flood",translation:"наводнение",image:"assets/images/weather/flood.jpg",audioSrc:"assets/sounds/weather/flood.mp3"},{word:"hot",translation:"жара",image:"assets/images/weather/hot.jpg",audioSrc:"assets/sounds/weather/hot.mp3"},{word:"hurricane",translation:"ураган",image:"assets/images/weather/hurricane.jpg",audioSrc:"assets/sounds/weather/hurricane.mp3"},{word:"lightning",translation:"молния",image:"assets/images/weather/lightning.jpg",audioSrc:"assets/sounds/weather/lightning.mp3"},{word:"rainy",translation:"дождливо",image:"assets/images/weather/rainy.jpg",audioSrc:"assets/sounds/weather/rainy.mp3"},{word:"snowy",translation:"снежно",image:"assets/images/weather/snowy.jpg",audioSrc:"assets/sounds/weather/snowy.mp3"},{word:"stormy",translation:"шторм",image:"assets/images/weather/stormy.jpg",audioSrc:"assets/sounds/weather/stormy.mp3"},{word:"sunny",translation:"солнечно",image:"assets/images/weather/sunny.jpg",audioSrc:"assets/sounds/weather/sunny.mp3"},{word:"tornado",translation:"торнадо",image:"assets/images/weather/tornado.jpg",audioSrc:"assets/sounds/weather/tornado.mp3"},{word:"tsunami",translation:"цунами",image:"assets/images/weather/tsunami.jpg",audioSrc:"assets/sounds/weather/tsunami.mp3"},{word:"windy",translation:"ветрено",image:"assets/images/weather/windy.jpg",audioSrc:"assets/sounds/weather/windy.mp3"}]];function o(s,a){for(var e=0;e<a.length;e++){var t=a[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}var r=e(65).default,i=new(function(){function s(){!function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(this,s),console.log("Hello from JavaScript!"),this.data=t,this.isTrainActive=!0,this.allCards=[],this.allLinks=[],this.allAudio=[],this.burgerMenu=document.getElementById("check__burger__menu"),this.toggleGameMode=document.getElementById("check__toogle"),this.gameStartButton=document.querySelector(".game__control__btn"),this.gamePlayButton=document.querySelector(".play_btn"),this.gameRepeatButton=document.querySelector(".repeat"),this.isGameActive=!1,this.tempCategory="",this.NumberAudioOnGame=0}var a,e,i;return a=s,(e=[{key:"removeElementsInBlock",value:function(s){for(this.parentContainer=document.querySelector(s);this.parentContainer.firstChild;)this.parentContainer.removeChild(this.parentContainer.firstChild)}},{key:"addBlock",value:function(s,a,e){this.parentContainer=document.querySelector(s),this.newContainer=document.createElement(a),this.newContainer.classList.add(e),this.parentContainer.append(this.newContainer)}},{key:"getDefaultArray",value:function(s){this.arrayDefaultValues=[];for(var a=0;a<s;a+=1)this.arrayDefaultValues.push(a+1);return this.arrayDefaultValues}},{key:"getRandomArray",value:function(s,a,e){var t=e,o=[];this.arrayRandomValues=[];for(var r=s;r<=a;r+=1)o.push(r);for(var i=s;i<=t;i+=1){var n=o.splice(Math.floor(Math.random()*(a-i-1)+1),1);this.arrayRandomValues.push(n.pop())}return this.arrayRandomValues}},{key:"addCards",value:function(s,a){var e=this;this.tempCategory=s.toLowerCase(),document.querySelector(".cards").id=this.tempCategory,this.data.forEach((function(s){if(s[0].nameCategory===e.tempCategory)for(var t=0;t<a.length;t+=1){var o=a[t],i=new r("div",".cards","card");i.createCard(s[o].word,s[o].translation,s[o].image,s[o].audioSrc),e.allCards.push(i)}})),this.addEventListeners()}},{key:"openCategory",value:function(s){this.removeElementsInBlock(".cards"),this.addCards(s,this.getRandomArray(1,16,8)),this.tempCategory=s.toLowerCase(),document.querySelector(".cards").id=this.tempCategory,this.addEventListeners()}},{key:"addEventListeners",value:function(){var s=this;this.allCards.forEach((function(a){a.el.addEventListener("click",(function(){if("categories"===document.querySelector(".cards").getAttribute("id"))s.tempCategory=a.el.querySelector(".card__info__text").textContent.toLowerCase(),s.openCategory(s.tempCategory);else{console.log("click");var e=a.el.querySelector(".card__content"),t=a.el.querySelector(".flip_button");console.log(e),console.log(t),t.onclick=function(){e.classList.add("card_active")},e.addEventListener("mouseleave",(function(){e.classList.remove("card_active")}),!1)}s.isTrainActive&&a.el.querySelector("audio").play()}))}))}},{key:"flipCard",value:function(s){this.cardId=s,document.getElementById("".concat(this.cardId)).classList.add(".flip_active")}},{key:"getCards",value:function(){return this.allCards=document.querySelectorAll(".card"),this.allCards}},{key:"getLinks",value:function(){return this.allLinks=document.querySelectorAll(".header__nav__list__item__link"),this.allLinks}},{key:"getAudio",value:function(){return this.allAudio=document.querySelectorAll("audio"),this.allAudio}},{key:"playGame",value:function(){var s=this.getRandomArray(0,7,8);console.log(s+" sound"),this.getAudio()[s[this.NumberAudioOnGame]].play()}}])&&o(a.prototype,e),i&&o(a,i),s}());window.main=i,i.addBlock(".app__information","div","cards"),i.addCards("categories",i.getDefaultArray(8)),i.toggleGameMode.addEventListener("click",(function(){var s=document.querySelectorAll(".card__info");i.isTrainActive?(document.querySelectorAll(".card__content").forEach((function(s){s.style.overflow="hidden"})),s.forEach((function(s){s.style.bottom="-40px"})),document.querySelector(".game__control__btn").style.opacity="1",i.isTrainActive=!1):(document.querySelectorAll(".card__content").forEach((function(s){s.style.overflow="initial"})),s.forEach((function(s){s.style.bottom="0px"})),document.querySelector(".game__control__btn").style.opacity="0",i.isTrainActive=!0)})),i.getLinks().forEach((function(s){s.addEventListener("click",(function(){"Main menu"===s.querySelector(".nav__list__text").textContent?i.tempCategory="categories":i.tempCategory=s.querySelector(".nav__list__text").textContent.toLowerCase(),document.querySelector(".cards").id=i.tempCategory,i.allCards=[],i.removeElementsInBlock(".cards"),"categories"===i.tempCategory?i.addCards(i.tempCategory,i.getDefaultArray(8)):i.addCards(i.tempCategory,i.getRandomArray(1,16,8)),i.burgerMenu.checked=!1,i.toggleGameMode.checked=!1}))})),i.gameStartButton.addEventListener("click",(function(){i.gameStartButton.classList.add("repeat"),i.gameStartButton.classList.remove("game__control__btn");var s=document.querySelector(".game__control__btn__text");s.textContent="repeat",s.style.color="#ffffff",document.querySelector(".game__control__btn__img").src="assets/icons/repeat.png",i.playGame()}));e(67),e(69)}});