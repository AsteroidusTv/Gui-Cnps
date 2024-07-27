import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();

document
  .getElementById('titlebarButtonMinimize')
  ?.addEventListener('click', () => appWindow.minimize());
document
  .getElementById('titlebarButtonClose')
  ?.addEventListener('click', () => appWindow.close());
