import appState from './appstate';
import displaying from './displaying';

const clearAll = () => {
  navigator.vibrate(40);
  appState.firstString = '0';
  appState.tempString = '';
  appState.secondString = '';
  appState.result = '';
  appState.isSelected = false;
  appState.operator = '';

  const firstStringQuery = document.querySelector('.first')!;
  firstStringQuery.innerHTML = appState.firstString;
  const secondStringQuery = document.querySelector('.second')!;
  secondStringQuery.innerHTML = appState.secondString;
  const resultQuery = document.querySelector<HTMLElement>('.result')!;
  resultQuery.style.visibility = 'hidden';
  const operatorQuery = document.querySelector('.operator')!;
  operatorQuery.innerHTML = appState.operator;
};

const clearEntry = () => {
  if (appState.result) {
    clearAll();
    return;
  }
  navigator.vibrate(40);
  if (appState.tempString) {
    appState.tempString = '0';
    displaying();
  }
};

export { clearEntry, clearAll };
