const decBtnEl = document.querySelector('#counter [data-action="decrement"]');
const incBtnEl = document.querySelector('#counter [data-action="increment"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;

const decClick = () => ((counterValue -= 1), (spanEl.textContent = counterValue));
const incClick = () => ((counterValue += 1), (spanEl.textContent = counterValue));

decBtnEl.addEventListener('click', decClick);
incBtnEl.addEventListener('click', incClick);