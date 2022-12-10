import { appState } from "./main";
import { displaying } from "./displaying";

const percentage = () => {
  navigator.vibrate(40);
  if(!appState.isSelected || appState.result) return;

  let firstNum: number, secondNum: number;

  if(!appState.secondString){
    firstNum = Number(appState.firstString);
    secondNum = firstNum * firstNum/100;
    appState.tempString = `${secondNum}`; 
  }else{
    firstNum = Number(appState.firstString);
    secondNum = Number(appState.secondString);
    secondNum = firstNum *  secondNum/100;
    appState.tempString = `${secondNum}`;
  }
  displaying();
}
export { percentage };
