const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        // inputEl.classList.remove('invalid');
    } if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        // inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}