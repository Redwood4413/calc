interface AppState {
  tempString: string,
  firstString: string,
  secondString: string,
  result: string,
  isSelected: boolean,
  operator: string,
}
const appState: AppState = {
  tempString: '',
  firstString: '0',
  secondString: '',
  result: '',
  isSelected: false,
  operator: '',
};

export default appState;
