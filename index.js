const containerOptions = document.querySelector('.options-container');
const correctElementText = document.getElementById('correct-rgb');
const skipButton = document.getElementById('skip-question');
const resultText = document.getElementById('result-text');
const score = document.getElementById('score');

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

function clearElementHtml(parent) {
  const elementToclear = parent;
  elementToclear.innerHTML = '';
}

function createOptions(quantity) {
  clearElementHtml(containerOptions);
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

function generateColorAndIndex() {
  const colors = generateTotalColors(5);
  const correctColor = colors[generateNumber(5)];
  return { colors, correctColor };
}

function calculateScore(scoreRound) {
  const prevScore = score.innerText.split(':')[1];
  score.innerText = `Score: ${scoreRound + (+prevScore)}`;
}

function validateResponse({ target }, correctColor) {
  const responseIsCorrect = target.style.background === correctColor;
  if (responseIsCorrect) {
    resultText.innerText = 'Parabéns, você acertou!';
    calculateScore(3);
  } else {
    resultText.innerText = 'lamento, você errou!';
    calculateScore(-3);
  }
  main();
}

function manipulateOptions({ colors, correctColor }) {
  const TOTAL_OPTIONS = 5;
  createOptions(TOTAL_OPTIONS);
  const elementsOptions = document.querySelectorAll('.option');
  changeBackGround(elementsOptions, colors);
  correctElementText.innerText = correctColor;

  elementsOptions.forEach((element) => {
    element.addEventListener('click', (event) => {
      validateResponse(event, correctColor);
    });
  });
}

function main() {
  const { colors, correctColor } = generateColorAndIndex();
  manipulateOptions({ colors, correctColor });
}

skipButton.addEventListener('click', main);

window.onload = main;

module.exports = {
  generateOneColor, generateNumber,
};
