function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector('input')
const createBtnElem = document.querySelector('[data-create]')
const destroyBtnElem = document.querySelector('[data-destroy]')
const boxElem = document.querySelector('#boxes')

function createBoxes(amount) {
  const markup = [];

  for (let i = 1; i <= amount; i++) {
    const backgroundColor = getRandomHexColor();
    const boxCreate = `<div style="background-color: ${backgroundColor}; height: ${30 + i * 10}px; width: ${30 + i * 10}px"></div>`
    markup.push(boxCreate);
  }

  return markup.join('')
}

function destroy() {
  boxElem.innerHTML = '';
  inputElem.value = '';

}

function onBtnCreate() {
  const amount = inputElem.value;
  if (amount >= 1 && amount <= 100) {
    destroy()
    const boxes = createBoxes(amount);  
    
    return boxElem.innerHTML = boxes
  } else {
    destroy()
    return alert('Number 1-100')
  }
}

function onBtnDestroy() {
  destroy()
}

createBtnElem.addEventListener('click', onBtnCreate);
destroyBtnElem.addEventListener('click', onBtnDestroy);