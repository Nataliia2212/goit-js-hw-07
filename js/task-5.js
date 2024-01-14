function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body');
const btnElem = document.querySelector('button');
const spanColorElem = document.querySelector('.color');

function onBtnClick(event) {
  const bodyColor = getRandomHexColor();

  bodyElem.style.backgroundColor = bodyColor;
  spanColorElem.textContent = `${bodyColor}`
}

btnElem.addEventListener('click', onBtnClick);