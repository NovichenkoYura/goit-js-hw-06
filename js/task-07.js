

const refs = {
    inputTextRange: document.querySelector('#font-size-control'),
    inputText: document.querySelector('#text'),
};


refs.inputTextRange.addEventListener('input', onInpurRange);

function onInpurRange(event) {
    refs.inputText.style.fontSize = event.currentTarget.value + "px";
};

