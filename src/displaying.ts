import appState from './appstate';

const firstStringQuery = document.querySelector('.first')!;
const secondStringQuery = document.querySelector('.second')!;

const displaying = () => {
  if (!appState.isSelected) {
    appState.firstString = appState.tempString;
    firstStringQuery.innerHTML = appState.firstString;
  } else {
    appState.secondString = appState.tempString;
    secondStringQuery.innerHTML = appState.secondString;
  }
};

export default displaying;
