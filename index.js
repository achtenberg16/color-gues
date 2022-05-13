const containerOptions = document.querySelector('.options-container');

function generateNumber() {
  return Math.floor(Math.random() * 255);
}

function generateColor() {
  return `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
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

function main() {
  const TOTAL_OPTIONS = 5;
  createOptions(TOTAL_OPTIONS);
}

window.onload = main;

module.exports = {
  generateColor, generateNumber,
};
