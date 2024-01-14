const inputElem = document.querySelector('#name-input');
const nameElem = document.querySelector('#name-output');


function onInput(event) {
    const nameInput = event.target.value.trim();

    nameElem.textContent = nameInput || "Anonymous"
}

inputElem.addEventListener('input', onInput);