const modals = () => {
    function showModal(modal){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    function bindModal(triggerSelector, modalSelector, closeSelector){
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                showModal(modal);
            });
        });

        modal.addEventListener('click', e => {
            if(e.target === modal){
                closeModal(modal);
            }
        });

        close.addEventListener('click', ()=>{
            closeModal(modal);
        });

    }

    function showModalByTime(modalSelector, time){
        setTimeout(() =>{
            const modal = document.querySelector(modalSelector);
            showModal(modal);
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup',60000);
}

export default modals;