export { compute };
import { appState } from './main';

const resultQuery = document.querySelector(".result") as HTMLElement;
const firstStringQuery = document.querySelector(".first")!;

let resultNum: number;

const compute = () => {
  navigator.vibrate(40);
  let firstNum: number, secondNum: number;
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

  switch (appState.operator) {
    case "+":
      resultNum = firstNum + secondNum;
      break;
    case "-":
      resultNum = firstNum - secondNum;
      break;
    case "*":
      resultNum = firstNum * secondNum;
      break;
    case "/":
      if(secondNum === 0) {
        resultQuery.innerHTML = "Dzielisz przez 0, dzbanie";
        resultQuery.style.visibility = `visible`;
        return;
      };
      resultNum = firstNum / secondNum;
      break;
  }
  appState.result = `${resultNum}`
  resultQuery.style.visibility = `visible`;
  resultQuery.innerHTML = `${appState.result}`;
}