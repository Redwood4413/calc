import { appState } from "./main";
import { displaying } from "./displaying";

const square = () => {
  navigator.vibrate(40);
  if(!appState.tempString) return;
  if(appState.result) return;
  
  let localNum: number;

  localNum = Number(appState.tempString);
  localNum *= localNum;
  appState.tempString = `${localNum}`;

  displaying();
}
const squareRoot = () => {
  navigator.vibrate(40);
  if(!appState.tempString) return;
  if(appState.result) return;

  let localNum: number;

  localNum = Number(appState.tempString);
  localNum = Math.sqrt(localNum);
  appState.tempString = `${localNum}`;

  displaying();
}

export { square, squareRoot };