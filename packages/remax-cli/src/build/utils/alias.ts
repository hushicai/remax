import * as path from 'path';
import { Options, Platform } from '@remax/types';

interface Alias {
  [key: string]: string;
}

export default (options: Options, target: Platform) => {
  const config: Alias = {
    '@': path.resolve(options.cwd, options.rootDir),
    // 配合 webpack-virtual-modules
    '@remax/runtime-options': path.join(options.cwd, 'node_modules/@remax/apply-runtime-options.js'),
  };

  if (target !== Platform.web) {
    config['react-dom'] = '@remax/runtime';
  }

  return config;
};
