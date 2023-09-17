import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import timer from './modules/timer';
import slider from './modules/slider';
import calcul from './modules/calcul';
window.addEventListener('DOMContentLoaded', () => {



        tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        modal('[data-modal]', '.modal');
        timer('.timer', '2023-07-30');
        cards();
        forms("form");
        slider({
                container: '.offer__slider', 
                slide: '.offer__slide',
                nextArrow: '.offer__slider-next',
                prevArrow: '.offer__slider-prev',
                currentCounter: '#current',
                wrapper: '.offer__slider-wrapper',
                field: '.offer__slider-inner'
        });
        calcul();




   
  
  
   
});