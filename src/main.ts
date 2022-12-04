// @ts-nocheck
import './style.css';
import './version';
export { __APP_VERSION__ }
import { typingNumbers } from './typingNumbers';
import { dragging } from './dragging';
import { selectOperator } from './operators';
const version2 = __APP_VERSION__
const numberBtns = document.querySelectorAll(".numbers input")!;
const display = document.querySelector(".display")!;
const rightButtons = document.querySelectorAll(".right input:not(:first-child):not(:last-child)")!;
const firstNum = document.querySelector(".first")!.innerHTML = '0';

numberBtns.forEach(button => {
  button.addEventListener('click', typingNumbers)
});

rightButtons.forEach(button => {
  button.addEventListener('click', selectOperator)
})

display.addEventListener('mousedown', dragging);
display.removeEventListener('mouseup', dragging);