import './style.css';
import './version';
import { typingNumbers } from './typingNumbers';
import { dragging } from './dragging';
import { selectOperator } from './operators';

const numberBtns = document.querySelectorAll(".numbers input")!;
const display = document.querySelector(".display")!;
const rightButtons = document.querySelectorAll(".right input:not(:first-child):not(:last-child)")!;

numberBtns.forEach(button => {
  button.addEventListener('click', typingNumbers)
});

rightButtons.forEach(button => {
  button.addEventListener('click', selectOperator)
})

display.addEventListener('mousedown', dragging);
display.removeEventListener('mouseup', dragging);