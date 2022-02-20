import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @quansight-labs/jupyterlab-nm-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@quansight-labs/jupyterlab-nm-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @quansight-labs/jupyterlab-nm-theme is activated!');
    const style = '@quansight-labs/jupyterlab-nm-theme/index.css';
    manager.register({
      name: 'JupyterLab NM',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;