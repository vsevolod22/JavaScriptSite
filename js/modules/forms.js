import {eventModalClose, eventModalOpen} from './modal';


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
        form.addEventListener('submit', (el) => {
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
            `
            form.insertAdjacentElement('afterend', statusMessage);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
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

            eventModalOpen('.modal');


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

}

export default forms;