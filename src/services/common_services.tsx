export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const cmdOrCtrl = () =>
  window.navigator.platform.match(/^Mac/) ? "cmd" : "ctrl";

//write a function to check for mac or windows
export const isMac = () =>
  window.navigator.platform.match(/^Mac/) ? true : false;
