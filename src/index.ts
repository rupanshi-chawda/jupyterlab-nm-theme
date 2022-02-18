import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @jupyterlab-nm-theme/jupyterlab-nm-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@jupyterlab-nm-theme/jupyterlab-nm-theme:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @jupyterlab-nm-theme/jupyterlab-nm-theme is activated!');
    const style = '@jupyterlab-nm-theme/jupyterlab-nm-theme/index.css';

    manager.register({
      name: '@jupyterlab-nm-theme/jupyterlab-nm-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
