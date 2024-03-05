const modals = () => {
    function showModal(modal){
        calcScroll();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            modals = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modals.forEach(item => {
                    item.style.display = 'none';
                });
                showModal(modal);
            });
        });

        modal.addEventListener('click', e => {
            if(e.target === modal && closeClickOverlay){
                modals.forEach(item => {
                    item.style.display = 'none';
                });
                closeModal(modal);
            }
        });

        close.addEventListener('click', ()=>{
            modals.forEach(item => {
                item.style.display = 'none';
            });
            closeModal(modal);
        });

        if(modal.classList.contains('popup_calc_end')){
            const form =
                modal.querySelector('form');

            form.addEventListener('submit', () => {
                setTimeout(() => closeModal(modal),3000);
            });
        }

    }

    function showModalByTime(modalSelector, time){
        setTimeout(() =>{
            const modals = document.querySelectorAll('[data-modal]')
            let isShowModal = true;

            for(let item of modals){
                if(item.style.display == 'block'){
                    isShowModal = false;
                    break;
                }
            }

            if(isShowModal){
                const modal = document.querySelector(modalSelector);
                showModal(modal);
            }
        }, time);
    }

    function calcScroll(){
        let div = document.createElement('div');

        div.style.height = '50px';
        div.style.width = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn','.popup_calc','.popup_calc_close');
    bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // showModalByTime('.popup',60000);
}

export default modals;