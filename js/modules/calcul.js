function calcul() {
      
    // calk of Calories

    const result = document.querySelector('.calculating__result span');
    let sex = 'female', height, weight, age, ratio = 1.375;
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    } if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        localStorage.setItem('ratio', 1.375);
        ratio = 1.375;
    }

    function calcTotal() {
        if(!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        }
        if (sex === 'female') {
            result.textContent = ((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio).toFixed(2);
        }
        else if (sex === 'male') {
            result.textContent = ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed(2);
        }
    }


    function getStaticInformathion(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);
        elements.forEach(el => {
            el.addEventListener('click', el => {
                if(el.target.getAttribute('data-ratio')) {
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

export default calcul;