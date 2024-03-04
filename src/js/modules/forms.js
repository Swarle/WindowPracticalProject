import checkNumInput from "./checkNumInput";
const forms = (modalState = null) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInput('input[name="user_phone"]');

    const messages = {
        loading: "Загрузка...",
        success: "Данные успешно отправлены!",
        error: "Что-то пошло не так..."
    }

    const postData = async (url, data) => {
        const statusMessage = document.querySelector('.status');
        statusMessage.textContent = messages.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    function clearInputs(){
        inputs.forEach(item => {
            item.value = '';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if(modalState){
                if(item.getAttribute('data-calc') === 'end'){
                    for(let key in modalState){
                        formData.append(key, modalState[key]);
                    }
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = messages.success;
                })
                .catch(() =>{
                    statusMessage.textContent = messages.error;
                })
                .finally(() =>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    },7000);
                });
        });
    });
}

export default forms;