/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calcul.js":
/*!******************************!*\
  !*** ./js/modules/calcul.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calcul() {
  // calk of Calories

  const result = document.querySelector('.calculating__result span');
  let sex = 'female',
    height,
    weight,
    age,
    ratio = 1.375;
  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }
  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    localStorage.setItem('ratio', 1.375);
    ratio = 1.375;
  }
  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____';
      return;
    }
    if (sex === 'female') {
      result.textContent = ((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio).toFixed(2);
    } else if (sex === 'male') {
      result.textContent = ((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio).toFixed(2);
    }
  }
  function getStaticInformathion(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);
    elements.forEach(el => {
      el.addEventListener('click', el => {
        if (el.target.getAttribute('data-ratio')) {
          ratio = +el.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', ratio);
        } else {
          sex = el.target.getAttribute('id');
          localStorage.setItem('sex', sex);
        }
        console.log(ratio, sex);
        elements.forEach(el => {
          el.classList.remove(activeClass);
        });
        el.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }
  getStaticInformathion('#gender', 'calculating__choose-item_active');
  getStaticInformathion('.calculating__choose_big', 'calculating__choose-item_active');
  calcTotal();
  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }
      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }
  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.classList.remove(activeClass);
      if (el.getAttribute('id') === localStorage.getItem('sex')) {
        el.classList.add(activeClass);
      }
      if (el.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        el.classList.add(activeClass);
      }
    });
  }
  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');

  // const gender = document.querySelector('#gender'),
  //       male = gender.querySelector('#male'),
  //       female = gender.querySelector('#female'),
  //       inputs = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item'),
  //       choseBtn = document.querySelectorAll('.calculating__choose_big .calculating__choose-item');

  // let inputHeight = 0,
  //     inputWeight = 0,
  //     inputAge = 0,
  //     activeElem = 0;

  // function removeMale() {
  //     male.classList.remove('calculating__choose-item_active');
  //     female.classList.remove('calculating__choose-item_active');
  // }
  // let sex, ratio;
  // if (localStorage.getItem('sex') == 'male') {
  //     sex = male
  // } else if (localStorage.getItem('sex') == 'female') {
  //     sex = female
  // } else
  //     {sex = female }
  // if (localStorage.getItem('ratio')) {
  //     ratio = localStorage.getItem('ratio')
  // } else
  // {
  //         ratio = 1

  // }
  // function initLocalSettings (selector, activeClass) {
  //     const elements = document.querySelectorAll(selector);
  //     elements.forEach(el => {
  //         el.classList.remove(activeClass);
  //         if (el.getAttribute('id') === localStorage.getItem('sex')) {
  //             elements.classList.add(activeClass);
  //         }
  //         // if (el.getAttribute(''))
  //     });
  // }
  // // initLocalSettings('#gender', 'calculating__choose-item_active');

  // function chouseMale(male) {
  //     male.addEventListener('click', (e) => {
  //         element = e.target;
  //         removeMale();
  //         element.classList.add('calculating__choose-item_active');
  //         localStorage.setItem('sex' ,element.getAttribute('id'));
  //         coloriesCount();

  //     });
  // }
  // function chouseActive(btns) {
  //     btns.forEach(el => {
  //         el.addEventListener('click', (element) => {
  //             btns.forEach(el => {
  //                 el.classList.remove('calculating__choose-item_active');
  //             });
  //            elem = element.target;
  //            elem.classList.add('calculating__choose-item_active');
  //            activeElem = elem;
  //            coloriesCount();
  //         });
  //     })
  // }
  // function allInputs(input) {
  //     input.forEach((el, number) => {
  //         el.addEventListener('input', (e) => {
  //             element = e.target;
  //             if (el.value.match(/\D/)) {
  //                 el.style.border = '1px solid red';
  //             } else {
  //                 el.style.border = 'none';
  //             }
  //             if (number === 0) {
  //                     inputHeight = el.value;
  //                 }

  //             else if (number === 1) {
  //                 inputWeight = el.value;

  //             }
  //             else if (number === 2) {
  //                 inputAge = el.value;

  //             }
  //             coloriesCount();
  //         });
  //     });
  // }
  // function coloriesCount(ratio) {
  //     choseBtn.forEach((el, i) => {
  //         let element = el.target;

  //         if (activeElem === 0 || (activeElem.classList.contains('calculating__choose-item_active') && activeElem.id === 'small'  && i === 1) || localStorage.getItem('ratio') == 1.15) {
  //             if (localStorage.getItem('ratio') == 1.15) {
  //                 activeElem.classList.remove('calculating__choose-item_active');
  //                 el.classList.add('calculating__choose-item_active');
  //             }
  //             localStorage.setItem('ratio', 1.15);
  //             resultForMale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 + 5)*ratio;
  //             resultForFemale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 - 161)*ratio;

  //         } else if (activeElem.classList.contains('calculating__choose-item_active') && activeElem.id === 'medium' && i === 2 || localStorage.getItem('ratio') == 1.3) {
  //             if (localStorage.getItem('ratio') == 1.3) {
  //                 activeElem.classList.remove('calculating__choose-item_active');
  //                 el.classList.add('calculating__choose-item_active');
  //             }
  //             localStorage.setItem('ratio', 1.3);
  //             resultForMale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 + 5)*ratio;
  //             resultForFemale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 - 161)*ratio;

  //         } else if (activeElem.classList.contains('calculating__choose-item_active') && activeElem.id === 'high' && i === 3 || localStorage.getItem('ratio') == 1.5) {
  //             if (localStorage.getItem('ratio') == 1.5) {
  //                 activeElem.classList.remove('calculating__choose-item_active');
  //                 el.classList.add('calculating__choose-item_active');
  //             }
  //             localStorage.setItem('ratio', 1.5);
  //             resultForMale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 + 5)*ratio;
  //             resultForFemale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 - 161)*ratio;

  //         }
  //         else if ((activeElem.classList.contains('calculating__choose-item_active') && i === 0) || localStorage.getItem('ratio') == 1){
  //             if (localStorage.getItem('ratio') == 1) {
  //                 activeElem.classList.remove('calculating__choose-item_active');
  //                 el.classList.add('calculating__choose-item_active');
  //             }
  //             localStorage.setItem('ratio', 1);
  //             resultForMale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 + 5)*ratio;
  //             resultForFemale = (+inputHeight*(6.25) + +inputWeight*10 - +inputAge*5 - 161)*ratio;
  //         }
  //     });

  //     if (!!inputHeight == true && !!inputAge == true && !!inputWeight == true && (resultForMale || resultForFemale)) {
  //         if (male.classList.contains('calculating__choose-item_active')) {
  //             document.querySelector('.calculating__result').innerHTML = `
  //             <div class="calculating__result">
  //                 <span>${resultForMale.toFixed(2)}</span> ккал
  //             </div>
  //         `
  //         } else if (female.classList.contains('calculating__choose-item_active')) {
  //             document.querySelector('.calculating__result').innerHTML = `
  //             <div class="calculating__result">
  //                 <span>${resultForFemale.toFixed(2)}</span> ккал
  //             </div>
  //         `
  //         }
  //     } else {
  //         document.querySelector('.calculating__result').innerHTML = `
  //             <div class="calculating__result">
  //                 <span>_____</span> ккал
  //             </div>
  //             `
  //     }

  // }
  // chouseActive(choseBtn)
  // chouseMale(male);
  // chouseMale(female);
  // allInputs(inputs);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcul);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cards() {
  // createCardClass

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transferToRub = 82;
      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }
      this.classes = classes;
      this.changeToRubls();
    }
    changeToRubls() {
      this.price = this.price * this.transferToRub;
    }
    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'menu_item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }
      element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
        </div>
        `;
      this.parent.append(element);
    }
  }
  axios.get('http://localhost:3000/menu').then(data => {
    data.data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servises/servises */ "./js/modules/servises/servises.js");


function forms(formSelector) {
  // Forms

  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Сокро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(form => {
    console.log(form);
    bindpostData(form);
  });

  // const getResurses = async (url) => {
  //     const res = await fetch(url);

  //     if (!res.ok) {
  //         new Error(`Could not fetch ${url}, status: ${res.status}`);
  //     }

  //     return await res.json();
  // };

  function bindpostData(form) {
    form.addEventListener('submit', el => {
      el.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;

      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');

      // request.setRequestHeader('Content-type', 'application/json'); 
      const formData = new FormData(form);

      // request.send(json);

      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0,_servises_servises__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showTanksModal(message.success);
        form.reset();
        statusMessage.remove();
      }).catch(() => {
        showTanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });

      // request.addEventListener('load', () => {
      //     if (request.status === 200) {

      //         console.log(request.response);
      //         showTanksModal(message.success);
      //         form.reset();
      //         statusMessage.remove();

      //     }
      //     else {
      //         showTanksModal(message.failure);
      //     }
      // });
    });

    function showTanksModal(message) {
      const previosModalDialog = document.querySelector('.modal__dialog');
      previosModalDialog.classList.add('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.eventModalOpen)('.modal');
      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__close" data-close>×</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;
      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
        thanksModal.remove();
        previosModalDialog.classList.add('show');
        previosModalDialog.classList.remove('hide');
        modalClose();
      }, 4000);
    }
  }

  // getResurses('http://localhost:3000/menu')
  //     .then (data => createCard());

  // function createCard(data) {
  //     data.forEach(({img, altimg, title, descr, price}) => {
  //         const element = document.createElement('div');

  //         element.classList.add('menu__item');

  //         element.innerHTML = `
  //         <div class="menu__item">
  //             <img src=${img} alt=${altimg}>
  //             <h3 class="menu__item-subtitle">${title}</h3>
  //             <div class="menu__item-descr">${descr}</div>
  //             <div class="menu__item-divider"></div>
  //             <div class="menu__item-price">
  //                 <div class="menu__item-cost">Цена:</div>
  //                 <div class="menu__item-total"><span>${price}</span> руб/день</div>
  //         </div>
  //     </div>
  //         `;

  //         document.querySelector('.menu .container').append(element);
  //     });
  // }
  // .then(data => data.json())
  // .then(data => {for (let i = 0; i < data.length; i++) {
  //     const arr = Object.entries(data[i]).map(item => item[1]);
  //     const src = arr[0], 
  //     alt = arr[1], 
  //     title = arr[2], 
  //     descr = arr[3], 
  //     price = arr[4];
  //     console.log(src, alt, title, descr, price);
  //     if (i === 1) {
  //         new MenuCard(
  //             src,
  //             alt,
  //             title,
  //             descr,
  //             price,
  //             ".menu .container",
  //             'menu_item',
  //             'big'

  //         ).render();
  //     } else {
  //         new MenuCard(
  //             src,
  //             alt,
  //             title,
  //             descr,
  //             price,
  //             ".menu .container"
  //         ).render();
  //     }

  // }})
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   eventModalClose: () => (/* binding */ eventModalClose),
/* harmony export */   eventModalOpen: () => (/* binding */ eventModalOpen)
/* harmony export */ });
function eventModalOpen(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}
function eventModalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
function modal(triggerSelector, modalSelector) {
  //Modal

  const modalOpenForm = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);
  function modalOpen(event) {
    event.forEach(elem => {
      elem.addEventListener('click', () => {
        eventModalOpen(modalSelector);
      });
    });
  }
  function modalClose() {
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.getAttribute('data-close') == '') {
        eventModalClose(modalSelector);
      }
    });
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
        eventModalClose(modalSelector);
      }
    });
  }
  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      console.log('da');
      eventModalOpen(modalSelector);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  console.log(window.scrollY);
  window.addEventListener('scroll', showModalByScroll);
  modalOpen(modalOpenForm);
  modalClose();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/servises/servises.js":
/*!*****************************************!*\
  !*** ./js/modules/servises/servises.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(_ref) {
  let {
    container,
    slide,
    nextArrow,
    prevArrow,
    currentCounter,
    wrapper,
    field
  } = _ref;
  //Slider

  const slider = document.querySelectorAll(slide),
    swapSliderR = document.querySelector(prevArrow),
    swapSliderL = document.querySelector(nextArrow),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width,
    slid = document.querySelector(container);
  //   firstImg = swapSliderL.getElementsByTagName('img')[0],
  //   secondImg = swapSliderR.getElementsByTagName('img')[0];

  let number = 1;
  let offset = 0;
  slidesField.style.width = 100 * slider.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  function currentSlide() {
    if (slider.length > 10) {
      current.textContent = `${number}`;
    } else {
      current.textContent = `0${number}`;
    }
  }
  currentSlide();
  slidesWrapper.style.overflow = 'hidden';
  slider.forEach(slide => {
    slide.style.width = width;
  });
  slid.style.position = 'relative';
  const dots = document.createElement('ol'),
    allDots = [];
  dots.classList.add('carousel-indicators');
  dots.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
  slid.append(dots);
  for (let i = 0; i < slider.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.append(dot);
    allDots.push(dot);
  }
  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }
  swapSliderL.addEventListener('click', () => {
    if (offset == deleteNotDigits(width) * (slider.length - 1)) {
      offset = 0;
      number = 1;
      currentSlide();
    } else {
      offset += deleteNotDigits(width);
      number = number + 1;
      currentSlide();
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    allDots.forEach((dot, i) => {
      dot.style.opacity = '.5';
      if (i == number - 1) {
        dot.style.opacity = 1;
      }
    });
  });
  swapSliderR.addEventListener('click', () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slider.length - 1);
      number = slider.length;
      currentSlide();
    } else {
      offset -= deleteNotDigits(width);
      number -= 1;
      currentSlide();
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    allDots.forEach((dot, i) => {
      dot.style.opacity = '.5';
      if (i == number - 1) {
        dot.style.opacity = 1;
      }
    });
  });
  allDots.forEach(dot => {
    dot.addEventListener('click', element => {
      const slideTo = element.target.getAttribute('data-slide-to');
      number = +slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);
      allDots.forEach((dot, i) => {
        dot.style.opacity = '.5';
        if (i == number - 1) {
          dot.style.opacity = 1;
        }
      });
      slidesField.style.transform = `translateX(-${offset}px)`;
      currentSlide();
    });
  });

  // firstImg.classList.add('first');
  // secondImg.classList.add('second');
  // console.log(firstImg);
  // console.log(secondImg);

  // slider.forEach((slid, i) => {
  //     slid.classList.add('hide');
  //     if (i === 0) {
  //         slid.classList.remove('hide');
  //         current.textContent = '01';
  //     }
  // });

  // function hideSlideContent() {
  //     slider.forEach(tab => { 
  //         tab.classList.add('hide');
  //         tab.classList.remove('show', 'fade');
  //     });
  // }
  // function showSlideContent(i = 0) {
  //     slider[i].classList.remove('hide');
  //     current.textContent = `0${i+1}`;
  // }

  // function swapSliderLeft(swapSlider, img) {
  //     swapSlider.addEventListener('click', (elem) => {
  //         const element = elem.target;
  //         if (img.src.endsWith('icons/right.svg') || element.classList.contains('offer__slider-next')) {
  //             if (number < slider.length - 1) {
  //                 number = number + 1;
  //                 hideSlideContent();
  //                 showSlideContent(number);
  //                 console.log(number);   
  //             } else if (number === slider.length - 1) {
  //                 number = 0;
  //                 hideSlideContent();
  //                 showSlideContent(number);
  //             }
  //      }
  //         else if (img.src.endsWith('icons/left.svg') || element.classList.contains('offer__slider-prev')) {
  //             if (number > 0) {
  //                 number = number - 1;
  //                 hideSlideContent();
  //                 showSlideContent(number);
  //                 console.log('da');   
  //             } else if (number === 0) {
  //                 number = slider.length - 1;
  //                 hideSlideContent();
  //                 showSlideContent(number);
  //             }
  //         }

  //     });

  // }

  // swapSliderLeft(swapSliderL, firstImg);
  // swapSliderLeft(swapSliderR, secondImg);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelect, tabsParentSelector, activeClass) {
  //Tabs

  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelect),
    tabsParent = document.querySelector(tabsParentSelector);
  function hideTabContent() {
    tabsContent.forEach(tab => {
      tab.classList.add('hide');
      tab.classList.remove('show', 'fade');
    });
    tabs.forEach(tab => {
      tab.classList.remove(activeClass);
    });
  }
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((tab, i) => {
        if (target == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    } else {
      console.log('da');
    }
  });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(selector, deadline) {
  //Timer

  function getTimeRemaning(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor(t / (1000 * 60 * 60) % 24),
      minutes = Math.floor(t / (1000 * 60) % 60),
      seconds = Math.floor(t / 1000 % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  console.log(getTimeRemaning(deadline));
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else if (num < 0) {
      return `00`;
    } else {
      return num;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaning(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(selector, deadline);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calcul__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calcul */ "./js/modules/calcul.js");







window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal');
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__["default"])('.timer', '2023-07-30');
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])("form");
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  (0,_modules_calcul__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map