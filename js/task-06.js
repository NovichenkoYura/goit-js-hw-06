const refs = {
    inputForm: document.querySelector('#validation-input'),
    inputCorrectLength: document.querySelector('input[data-length]'),
        
};


refs.inputForm.addEventListener('focus', onInputFocus);
refs.inputForm.addEventListener('blur', onInputBlur);


function onInputFocus() {
    // console.log('focus')
}

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(refs.inputCorrectLength.dataset.length)) {
        refs.inputForm.classList.add('valid');
        refs.inputForm.classList.remove('invalid')
    }

   else {
        refs.inputForm.classList.add('invalid');
        refs.inputForm.classList.remove('valid')
    }
    
}

