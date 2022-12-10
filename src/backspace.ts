import { appState } from "./main";
import { displaying } from "./displaying";

const operatorQuery = document.querySelector(".operator")!;

const backspace = () => {
  navigator.vibrate(40);
  if(appState.result) return;

  //replaces last char in firstString with 0
  if(appState.firstString.length <= 1 && !appState.isSelected) {
    appState.tempString = "0";
    displaying();  
    return;
  };

  //allows removal of operator
  if(!appState.secondString && appState.isSelected){
    appState.tempString = appState.firstString;
    operatorQuery.innerHTML = '';
    appState.isSelected = false;
    return;
  }

  if(appState.firstString === "0") return;
  appState.tempString = appState.tempString.slice(0, -1);
  displaying();
}

export { backspace };