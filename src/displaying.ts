import { isSelected } from "./operators";
import { appState } from "./typingNumbers";

export { displaying };

const firstStringQuery = document.querySelector(".first")!;
const secondStringQuery = document.querySelector(".second")!;

const displaying = () => {
  if(!isSelected) {
    appState.firstString = appState.tempString;
    firstStringQuery.innerHTML = appState.firstString;
  }else{
    appState.secondString = appState.tempString;
    secondStringQuery.innerHTML = appState.secondString;
  }
}