import { displaying } from "./displaying";
import { appState } from './main';

export { typingNumbers, negation };
const resultQuery = document.querySelector(".result") as HTMLElement;
const firstStringQuery = document.querySelector(".first")!;
const secondStringQuery = document.querySelector(".second")!;



const typingNumbers = (e:MouseEvent) => {
  navigator.vibrate(40);

  if(!e.target) return;
  const clickedValue = (e.target as HTMLInputElement).value;

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
  //if(!result) return;
  console.log(typeof appState.result)

  if(appState.tempString.includes('-')){
    appState.tempString = appState.tempString.slice(1);
  }else{
    appState.tempString = `-${appState.tempString}`
  }
  displaying();
}
