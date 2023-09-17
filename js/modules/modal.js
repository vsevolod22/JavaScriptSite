function eventModalOpen (modalSelector) {
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
        })
    }


   
    function modalClose() {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                eventModalClose(modalSelector);
            }
        });

        document.addEventListener('keydown', (e) => {
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

export default modal;
export {eventModalOpen};
export {eventModalClose};
