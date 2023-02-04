const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        return spanEl.textContent = 'Anonymous';
    }
};