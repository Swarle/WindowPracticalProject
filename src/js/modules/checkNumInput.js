const checkNumInput = (selector) => {
    const elem = document.querySelectorAll(selector);

    elem.forEach(item => {
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/\D/,'');
        });
    });
}

export default checkNumInput;