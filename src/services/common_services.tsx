export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const cmdOrCtrl = () =>
  window.navigator.platform.match(/^Mac/) ? "cmd" : "ctrl";
