function slider({container, slide, nextArrow, prevArrow, currentCounter, wrapper, field}) {
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
            offset += deleteNotDigits(width)
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
            offset = deleteNotDigits(width) * (slider.length - 1)
            number = slider.length;
            currentSlide();
        } else {
            offset -= deleteNotDigits(width)
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
        dot.addEventListener('click', (element) => {
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


export default slider;