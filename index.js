const containerOptions = document.querySelector('.options-container');

function generateNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function generateOneColor() {
  return `rgb(${generateNumber(255)}, ${generateNumber(255)}, ${generateNumber(255)})`;
}

function generateTotalColors(quantityColors) {
  const colors = [];
  for (let i = 0; i < quantityColors; i += 1) {
    colors.push(generateOneColor());
  }
  return colors;
}

function generateElement(tag, className) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function appendElement(element, parent) {
  parent.appendChild(element);
}

function createOptions(quantity) {
  for (let i = 0; i < quantity; i += 1) {
    const element = generateElement('div', 'option');
    appendElement(element, containerOptions);
  }
}

function changeBackGround(elementsHTML, colors) {
  elementsHTML.forEach((htmlElement, index) => {
    const currentElement = htmlElement;
    currentElement.style.background = colors[index];
  });
}

function main() {
  const correctColor = generateNumber(5);
  const colors = generateTotalColors(5);
  const TOTAL_OPTIONS = 5;
  createOptions(TOTAL_OPTIONS);
  const elementsOptions = document.querySelectorAll('.option');
  changeBackGround(elementsOptions, colors);
}

window.onload = main;

module.exports = {
  generateOneColor, generateNumber,
};
