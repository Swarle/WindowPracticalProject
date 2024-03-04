import checkNumInput from "./checkNumInput";
const changeModalState = (state) => {
    const windowForm= document.querySelectorAll('.balcon_icons_img'),
        height = document.querySelectorAll('#height'),
        width = document.querySelectorAll('#width'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInput('#width');
    checkNumInput('#height');

    function bindActionToElems(event, elem, prop, action){
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (action){
                    case 'windowForm':
                        state[prop] = i;
                        break;
                    case 'byValue':
                        state[prop] = item.value;
                        break;
                    case 'checkbox':
                        i === 0 ? state[prop] = 'Холодный' : state[prop] = 'Тёплое';
                        elem.forEach((box, j) => {
                            box.checked = false;
                            if(i === j) box.checked = true;
                        });
                }
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'windowForm', 'windowForm');
    bindActionToElems('input', height, 'height', 'byValue');
    bindActionToElems('input', width, 'width', 'byValue');
    bindActionToElems('change', windowType, 'windowType','byValue');
    bindActionToElems('change', windowProfile, 'windowProfile', 'checkbox');
}

export default changeModalState;