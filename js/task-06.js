const refs = {
    inputForm: document.querySelector('#validation-input'),
    inputCorrectLength: document.getAttribute('data-length'),
        
};

// console.log(refs.inputCorrectLength)

refs.inputForm.addEventListener('focus', onInputFocus);
refs.inputForm.addEventListener('blur', onInputBlur);


function onInputFocus() {
    // console.log('focus')
}

function onInputBlur(event) {
    if (event.currentTarget.value.length === inputCorrectLength.value) {
        document.style.classlist.remove('invalid');
        document.style.classlist.add('valid');
    }

    if (event.currentTarget.value.length === 0) {
        document.style.classlist.remove('invalid');
        document.style.classlist.remove('valid');
    } else {
        document.style.classlist.add('invalid');
        document.style.classlist.remove('valid');
    }
    
}