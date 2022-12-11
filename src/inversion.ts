import displaying from './displaying';
import appState from './appstate';

const inversion = () => {
  navigator.vibrate(40);

  if (appState.result) return;
  if (!appState.tempString) return;

  let localNum: number;

  localNum = Number(appState.tempString);
  localNum = 1 / localNum;
  appState.tempString = `${localNum}`;

  displaying();
};

export default inversion;
