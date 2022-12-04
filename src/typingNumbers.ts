import { isSelected } from "./operators";

export { typingNumbers, appState };

const firstNumQuery = document.querySelector(".first")!;
const secondNumQuery = document.querySelector(".second")!;
let firstNum: string = ""


let secondNum: string = "";
const appState = {
  tempString: '',
}
/* let tempString: string = ""; */

const typingNumbers = (e:MouseEvent) => {
  navigator.vibrate(40);

  if(!e.target) return;
  const clickedValue = (e.target as HTMLInputElement).value;

  //prevent typing multiple "0" at the beginning of a string
  if(appState.tempString.charAt(0) == "0" && clickedValue == "0" && !appState.tempString.includes(".")) return;

  //prevent typing multiple "."
  if(appState.tempString.includes(".") && clickedValue === ".") return;

  appState.tempString += clickedValue;
  if(!isSelected) {
    firstNum = appState.tempString;
    firstNumQuery.innerHTML = firstNum;
  }else{
    secondNum = appState.tempString;
    secondNumQuery.innerHTML = secondNum;
  }
}
