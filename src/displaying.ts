import { appState } from './main';

const firstStringQuery = document.querySelector(".first")!;
const secondStringQuery = document.querySelector(".second")!;

const displaying = () => {
  if(!appState.isSelected) {
    appState.firstString = appState.tempString;
    firstStringQuery.innerHTML = appState.firstString;
    return;
  }else{
    appState.secondString = appState.tempString;
    secondStringQuery.innerHTML = appState.secondString;
    return;
  }
}

export { displaying };