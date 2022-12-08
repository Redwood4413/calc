export { inversion };

import { displaying } from './displaying';
import { appState } from './main';

const inversion = () => {
  navigator.vibrate(40);

  if(appState.result) return;
  if(!appState.tempString || appState.tempString === "0") return;

  let localNum: number;

  localNum = Number(appState.tempString);
  localNum = 1 / localNum;
  appState.tempString = `${localNum}`;

  displaying();
}