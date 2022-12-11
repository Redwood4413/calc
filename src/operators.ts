import appState from './appstate';

const operatorQuery = document.querySelector('.operator')!;

const selectOperator = (e:MouseEvent) => {
  navigator.vibrate(40);
  if (!e.target) return;

  const clickedOperator = (e.target as HTMLInputElement).value;

  appState.operator = clickedOperator;

  if (!appState.isSelected) appState.tempString = '';

  appState.isSelected = true;
  operatorQuery.innerHTML = clickedOperator;
};

export default selectOperator;
