!function(a){function s(s){for(var t,n,r=s[0],l=s[1],c=s[2],u=0,m=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(a[t]=l[t]);for(d&&d(s);m.length;)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var a,s=0;s<i.length;s++){for(var e=i[s],t=!0,r=1;r<e.length;r++){var l=e[r];0!==o[l]&&(t=!1)}t&&(i.splice(s--,1),a=n(n.s=e[0]))}return a}var t={},o={0:0},i=[];function n(s){if(t[s])return t[s].exports;var e=t[s]={i:s,l:!1,exports:{}};return a[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=t,n.d=function(a,s,e){n.o(a,s)||Object.defineProperty(a,s,{enumerable:!0,get:e})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,s){if(1&s&&(a=n(a)),8&s)return a;if(4&s&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&s&&"string"!=typeof a)for(var t in a)n.d(e,t,function(s){return a[s]}.bind(null,t));return e},n.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(s,"a",s),s},n.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},n.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var d=l;i.push([70,1]),e()}({61:function(a,s,e){"use strict";e.r(s),e.d(s,"default",(function(){return o}));e(62);function t(a,s){for(var e=0;e<s.length;e++){var t=s[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}var o=function(){function a(s,e,t){!function(a,s){if(!(a instanceof s))throw new TypeError("Cannot call a class as a function")}(this,a);var o=document.querySelector(e);this.el=document.createElement(s),this.el.classList.add(t),o.appendChild(this.el)}var s,e,o;return s=a,(e=[{key:"setStringCardHTML",value:function(a,s,e){var t=this;this.el.innerHTML='<div class="card__content" id="'.concat(a,'">\n                          <div class="card__content__front ">\n                            <figure class="card__img">\n                              <img class="image" src="').concat(e,'" alt="').concat(a,'">\n                              <figcaption></figcaption>\n                          </figure>\n                            <div class="card__info">\n                              <p class="card__info__text">').concat(a,'</p>\n                              <button class="flip_button">\n                                <img class="flip_button__img" src="assets/icons/flip.png" alt="Flip">\n                              </button>\n                            </div>\n                          </div>\n                          <div class="card__content__back">\n                            <figure class="card__img">\n                              <img class="image" src="').concat(e,'" alt="').concat(s,'">\n                              <figcaption></figcaption>\n                          </figure>\n                            <div class="card__info">\n                              <p class="card__info__text">').concat(s,"</p>\n                            </div>\n                          </div>\n                        </div>"),this.el.onclick=function(){t.cardContent=document.getElementById(a),t.cardContent.classList.add("card_active")}}}])&&t(s.prototype,e),o&&t(s,o),a}()},66:function(a,s,e){var t=e(33),o=e(67);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[a.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);a.exports=o.locals||{}},67:function(a,s,e){},68:function(a,s,e){var t=e(33),o=e(69);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[a.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);a.exports=o.locals||{}},69:function(a,s,e){},70:function(a,s,e){"use strict";e.r(s);e(34),e(59);var t=[[{nameCategory:"categories"},{word:"Animals",translation:"Животные",image:"assets/images/categories/animals.jpg",audioSrc:""},{word:"Clothes",translation:"Одежда",image:"assets/images/categories/clothes.jpg",audioSrc:""},{word:"Occupations",translation:"Профессии",image:"assets/images/categories/occupations.jpg",audioSrc:""},{word:"Places",translation:"Места",image:"assets/images/categories/places.jpg",audioSrc:""},{word:"Space",translation:"Космос",image:"assets/images/categories/space.jpg",audioSrc:""},{word:"Transport",translation:"Транспорт",image:"assets/images/categories/transport.jpg",audioSrc:""},{word:"Vegetables",translation:"Овощи",image:"assets/images/categories/vegetables.jpg",audioSrc:""},{word:"Clothes",translation:"Одежда",image:"assets/images/categories/weather.jpg",audioSrc:""}],[{nameCategory:"animals"},{word:"cat",translation:"кот",image:"assets/images/animals/cat.jpg",audioSrc:"assets/audio/animals/cat.mp3"},{word:"cow",translation:"корова",image:"assets/images/animals/cow.jpg",audioSrc:"assets/audio/animals/cow.mp3"},{word:"deer",translation:"олень",image:"assets/images/animals/deer.jpg",audioSrc:"assets/audio/animals/deer.mp3"},{word:"dog",translation:"собака",image:"assets/images/animals/dog.jpg",audioSrc:"assets/audio/animals/dog.mp3"},{word:"hippo",translation:"бегемот",image:"assets/images/animals/hippo.jpg",audioSrc:"assets/audio/animals/hippo.mp3"},{word:"kangaroo",translation:"кенгуру",image:"assets/images/animals/kangaroo.jpg",audioSrc:"assets/audio/animals/kangaroo.mp3"},{word:"koala",translation:"коала",image:"assets/images/animals/koala.jpg",audioSrc:"assets/audio/animals/koala.mp3"},{word:"monkey",translation:"обезьяна",image:"assets/images/animals/monkey.jpg",audioSrc:"assets/audio/animals/monkey.mp3"},{word:"moose",translation:"лось",image:"assets/images/animals/moose.jpg",audioSrc:"assets/audio/animals/moose.mp3"},{word:"mouse",translation:"мышь",image:"assets/images/animals/mouse.jpg",audioSrc:"assets/audio/animals/mouse.mp3"},{word:"pig",translation:"свинья",image:"assets/images/animals/pig.jpg",audioSrc:"assets/audio/animals/pig.mp3"},{word:"seal",translation:"тюлень",image:"assets/images/animals/seal.jpg",audioSrc:"assets/audio/animals/seal.mp3"},{word:"sheep",translation:"овца",image:"assets/images/animals/sheep.jpg",audioSrc:"assets/audio/animals/sheep.mp3"},{word:"turtle",translation:"черепаха",image:"assets/images/animals/turtle.jpg",audioSrc:"assets/audio/animals/turtle.mp3"},{word:"walrus",translation:"морж",image:"assets/images/animals/walrus.jpg",audioSrc:"assets/audio/animals/walrus.mp3"}],[{nameCategory:"clothes"},{word:"blouse",translation:"блузка",image:"assets/images/clothes/blouse.jpg",audioSrc:"assets/audio/clothes/blouse.mp3"},{word:"cap",translation:"кепка",image:"assets/images/clothes/cap.jpg",audioSrc:"assets/audio/clothes/cap.mp3"},{word:"dress",translation:"платье",image:"assets/images/clothes/dress.jpg",audioSrc:"assets/audio/clothes/dress.mp3"},{word:"gloves",translation:"перчатки",image:"assets/images/clothes/gloves.jpg",audioSrc:"assets/audio/clothes/gloves.mp3"},{word:"hoodie",translation:"худи",image:"./assets/images/clothes/hoodie.jpg",audioSrc:"./assets/audio/clothes/hoodie.mp3"},{word:"mittens",translation:"рукавицы",image:"./assets/images/clothes/mittens.jpg",audioSrc:"./assets/audio/clothes/mittens.mp3"},{word:"sandals",translation:"сандали",image:"assets/images/clothes/sandals.jpg",audioSrc:"assets/audio/clothes/sandals.mp3"},{word:"scarf",translation:"шарф",image:"assets/images/clothes/scarf.jpg",audioSrc:"assets/audio/clothes/scarf.mp3"},{word:"shoes",translation:"туфли",image:"assets/images/clothes/shoes.jpg",audioSrc:"assets/audio/clothes/shoes.mp3"},{word:"shorts",translation:"шорты",image:"assets/images/clothes/shorts.jpg",audioSrc:"assets/audio/clothes/shorts.mp3"},{word:"skirt",translation:"юбка",image:"assets/images/clothes/skirt.jpg",audioSrc:"assets/audio/clothes/skirt.mp3"},{word:"slippers",translation:"тапочик",image:"assets/images/clothes/slippers.jpg",audioSrc:"assets/audio/clothes/slippers.mp3"},{word:"sneaker",translation:"кроссовки",image:"assets/images/clothes/sneaker.jpg",audioSrc:"assets/audio/clothes/sneaker.mp3"},{word:"suit",translation:"костюм",image:"assets/images/clothes/suit.jpg",audioSrc:"assets/audio/clothes/suit.mp3"},{word:"sweater",translation:"свитер",image:"assets/images/clothes/sweater.jpg",audioSrc:"assets/audio/clothes/sweater.mp3"}],[{nameCategory:"occupations"},{word:"blouse",translation:"блузка",image:"assets/images/clothes/blouse.jpg",audioSrc:"assets/audio/clothes/blouse.mp3"}]];function o(a,s){for(var e=0;e<s.length;e++){var t=s[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}var i=e(61).default,n=new(function(){function a(){!function(a,s){if(!(a instanceof s))throw new TypeError("Cannot call a class as a function")}(this,a),console.log("Hello from JavaScript!"),this.data=t,this.isTrainActive=!0,this.allCards=[],console.log(this.data[1][1].translation)}var s,e,n;return s=a,(e=[{key:"removeElementsInBlock",value:function(a){for(this.parentContainer=document.querySelector(a);this.parentContainer.firstChild;)this.parentContainer.removeChild(this.parentContainer.firstChild)}},{key:"addBlock",value:function(a,s,e){this.parentContainer=document.querySelector(a),this.newContainer=document.createElement(s),this.newContainer.classList.add(e),this.parentContainer.append(this.newContainer)}},{key:"addCards",value:function(a){var s=this;console.log("start cicle"),this.data.forEach((function(e){if(e[0].nameCategory===a)for(var t=1;t<9;t+=1){var o=new i("div",".cards","card");o.setStringCardHTML(e[t].word,e[t].translation,e[t].image),s.allCards.push(o)}}))}},{key:"flipCard",value:function(a){console.log("click"),this.cardId=a;var s=document.getElementById("".concat(this.cardId));console.log(s),s.classList.add(".flip_active")}},{key:"getCards",value:function(){return this.allCards=document.querySelectorAll(".card"),this.addCards}},{key:"addTable",value:function(){}}])&&o(s.prototype,e),n&&o(s,n),a}());window.main=n,n.addBlock(".app__information","div","cards"),n.addCards("categories"),console.log(n.allCards);e(66),e(68)}});