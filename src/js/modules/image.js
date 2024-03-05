const image = () => {
    const   workFlow = document.querySelector('.works'),
        imageModal = document.createElement('div'),
        bigImage = document.createElement('img');

    imageModal.classList.add('popup');
    workFlow.appendChild(imageModal);

    imageModal.style.justifyContent = 'center';
    imageModal.style.alignItems = 'center';
    imageModal.style.display = 'none';

    imageModal.appendChild(bigImage);

    workFlow.addEventListener('click', e => {
        e.preventDefault();

        const target = e.target;

        if(target && target.classList.contains('preview')){
            const path = target.parentNode.getAttribute('href');

            bigImage.setAttribute('src', path);

            imageModal.style.display = 'flex';
        }

        if(target && target.matches('div.popup')){
            imageModal.style.display = 'none';

            bigImage.setAttribute('src', '');
        }
    })
}

export default image;