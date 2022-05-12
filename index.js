function generateNumber() {
  return Math.floor(Math.random() * 255);
}

function generateColor() {
  return `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
}

function main () {

}

window.onload = main;
