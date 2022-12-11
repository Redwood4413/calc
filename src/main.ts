import './style.css';
import './version';
import { consolidateInputs, negation } from './typingNumbers';
import dragging from './dragging';
import selectOperator from './operators';
import compute from './computing';
import backspace from './backspace';
import { clearEntry, clearAll } from './clear';
import inversion from './inversion';
import { square, squareRoot } from './sqr(t)';
import percentage from './percentage';
import appState from './appstate';

const firstStringQuery = document.querySelector('.first')!;
firstStringQuery.innerHTML = `${appState.firstString}`;

const numberButtons = document.querySelectorAll('.numbers input')!;
const display = document.querySelector('.display')!;
const rightButtons = document.querySelectorAll('.right input:not(:first-child):not(:last-child)')!;
const negationButton = document.querySelector('.numbers button')!;
const equalButton = document.querySelector('.right input:last-child')!;
const backspaceButton = document.querySelector('.right input:first-child')!;
const clearEntryButton = document.querySelector("input[value='CE'")!;
const clearAllButton = document.querySelector("input[value='C'")!;
const inversionButton = document.querySelector("input[value='1/x'")!;
const sqrButton = document.querySelector("input[value='x2'")!;
const sqrtButton = document.querySelector('.top input:last-child')!;
const percentageButton = document.querySelector('.top input:first-child')!;
const body = document.querySelector('body')!;
const wrapper = document.querySelector('.wrapper') as HTMLDivElement;

document.addEventListener('keydown', (event) => {
  if (event.target !== body) return; // prevent typing when button is selected

  if ((event.key >= '0' && event.key <= '9') || event.key === '.') {
    consolidateInputs(event);
    return;
  }
  if (event.key === 'Backspace') {
    backspace();
    return;
  }

  if (event.key === 'Enter') {
    compute();
  }
});

numberButtons.forEach((button) => {
  button.addEventListener('mousedown', consolidateInputs);
});
negationButton.addEventListener('click', negation);
equalButton.addEventListener('click', compute);

rightButtons.forEach((button: any) => {
  button.addEventListener('click', selectOperator);
});

backspaceButton.addEventListener('click', backspace);
clearEntryButton.addEventListener('click', clearEntry);
clearAllButton.addEventListener('click', clearAll);
inversionButton.addEventListener('click', inversion);
sqrButton.addEventListener('click', square);
sqrtButton.addEventListener('click', squareRoot);
percentageButton.addEventListener('click', percentage);

display.addEventListener('mousedown', () => {
  wrapper.addEventListener('mousemove', dragging);
});
document.addEventListener('mouseup', () => {
  wrapper.removeEventListener('mousemove', dragging);
});
