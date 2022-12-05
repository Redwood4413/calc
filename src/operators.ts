export { operator, isSelected, selectOperator };
import { appState } from './typingNumbers'

const operatorQuery = document.querySelector(".operator")!;
let isSelected: boolean = false;
let operator: string = "";

const selectOperator = (e:MouseEvent) => {
  if(!e.target) return;

  navigator.vibrate(40);
  
  const clickedOperator = (e.target as HTMLInputElement).value;

  operator = clickedOperator;
  if(!isSelected) appState.tempString = '';
  
  isSelected = true;

  operatorQuery.innerHTML = clickedOperator;
}
