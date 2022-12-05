import './style.css';
import './version';
import { typingNumbers, negation } from './typingNumbers';
import { dragging } from './dragging';
import { selectOperator } from './operators';
import { compute } from './computing';

const numberBtns = document.querySelectorAll(".numbers input")!;
const display = document.querySelector(".display")!;
const rightButtons = document.querySelectorAll(".right input:not(:first-child):not(:last-child)")!;
const negationButton = document.querySelector(".numbers button")!;
const equalButton = document.querySelector(".right input:last-child")!;

numberBtns.forEach(button => {
  button.addEventListener('click', typingNumbers)
});
negationButton.addEventListener('click', negation);
equalButton.addEventListener('click', compute);

rightButtons.forEach(button => {
  button.addEventListener('click', selectOperator)
})

display.addEventListener('mousedown', dragging);
display.removeEventListener('mouseup', dragging);