
const refs = {
    inputText: document.querySelector('#name-input'),
    outputText: document.querySelector('h1'),
    
};

refs.inputText.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        refs.outputText.textContent = 'Hello, Anonymous';
    } else {
            refs.outputText.textContent = event.currentTarget.value;
    }
    
}
