export { selectOperator };
import { appState } from './main';

const operatorQuery = document.querySelector(".operator")!;

const selectOperator = (e:MouseEvent) => {
  navigator.vibrate(40);
  if(!e.target) return;
  
  //TODO: clearing result and 2nd string after operator click
  if(appState.result) {
    return;
  }
  
  const clickedOperator = (e.target as HTMLInputElement).value;

  appState.operator = clickedOperator;

  if(!appState.isSelected) appState.tempString = '';
  
  appState.isSelected = true;
  operatorQuery.innerHTML = clickedOperator;
}
