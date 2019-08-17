import fs from 'fs';
import path from 'path';
import defaultOptions from './defaultOptions';

export interface RemaxOptions {
  cssModules: boolean | RegExp;
  cwd: string;
  progress: boolean;
  output: string;
  UNSAFE_wechatTemplateDepth: number;
}

export default function getConfig(): RemaxOptions {
  const configPath: string = path.join(process.cwd(), './remax.config.js');
  if (fs.existsSync(configPath)) {
    const options = require(configPath);
    return {
      ...defaultOptions,
      ...options,
    };
  }
  return defaultOptions;
}
