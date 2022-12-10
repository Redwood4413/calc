// @ts-nocheck
import { displaying } from "./displaying";
import { appState } from './main';

export { consolidateInputs, typingNumbers, negation };
const resultQuery = document.querySelector(".result") as HTMLElement;
const firstStringQuery = document.querySelector(".first")!;
const secondStringQuery = document.querySelector(".second")!;

let clickedValue: string;

const consolidateInputs = (event:MouseEvent | KeyboardEvent) => {
  if(!event) return;
  
  if(event.key as HTMLInputElement) clickedValue = event.key;
  if((event.target as HTMLInputElement).value) {
    clickedValue = (event.target as HTMLInputElement).value
  }
  typingNumbers();
}

const typingNumbers = () => {
  navigator.vibrate(40);
  
  //typing with existing result
  if(appState.result) {
    resultQuery.style.visibility = "hidden";
    appState.firstString = `${appState.result}`;
    appState.tempString = '';
    secondStringQuery.innerHTML = appState.tempString;
    firstStringQuery.innerHTML = appState.firstString;
    appState.result = '';
  }
  //prevent typing multiple "0" at the beginning of a string
  if(appState.tempString.charAt(0) == "0" 
    && clickedValue == "0"
    && !appState.tempString.includes(".")
  ) return;

  //prevent typing multiple "."
  if(appState.tempString.includes(".") && clickedValue === ".") return;
  
  if(appState.tempString.charAt(0) === "0") {
    appState.tempString = clickedValue;
  }else{
    appState.tempString += clickedValue;
  }
  displaying();
}
const negation = () => {
  navigator.vibrate(40);

  if(appState.result) return;
  if(!appState.tempString) return;

  let localNum: number;

  localNum = Number(appState.tempString);
  localNum *= -1;
  appState.tempString = `${localNum}`;

  displaying();
}
