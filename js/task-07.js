const inputEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');

inputEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange(event) {
    spanEl.style.fontSize = event.currentTarget.value + 'px';
};
