export { compute };
import { appState } from './typingNumbers';
import { operator } from './operators';

const resultQuery = document.querySelector(".result") as HTMLElement;
const firstStringQuery = document.querySelector(".first")!;

let firstNum: number, secondNum: number;

const compute = () => {
  navigator.vibrate(40);
  
  if(!appState.firstString || !appState.secondString) return;

  /* //assigning to result with one string variable empty
  if(appState.firstString && !appState.secondString) result = firstNum;
  if(!appState.firstString && appState.secondString) result = secondNum; */

  if(appState.result){ 
    appState.firstString = `${appState.result}`;
    firstStringQuery.innerHTML = `${appState.result}`;
  }
  
  firstNum = Number(appState.firstString);
  secondNum = Number(appState.secondString);

  switch (operator) {
    case "+":
      appState.result = firstNum + secondNum;
      break;
    case "-":
      appState.result = firstNum - secondNum;
      break;
    case "*":
      appState.result = firstNum * secondNum;
      break;
    case "/":
      if(secondNum === 0) {
        resultQuery.innerHTML = "Dzielisz przez 0, dzbanie";
        resultQuery.style.visibility = `visible`;
        return;
      };
      appState.result = firstNum / secondNum;
      break;
    default:
      break;
  }
  
  resultQuery.style.visibility = `visible`;
  resultQuery.innerHTML = `${appState.result}`;

}