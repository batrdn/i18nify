import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import unflatten from './unflatten';

const generator = (word: string, translation: string, translationKey: string): void => {
  if (!process.env.OUTPUT_PATH) {
    throw new Error('Output path is not defined');
  }

  const mnFileName = `translation-mn.json`;
  const enFileName = `translation-en.json`;

  const mnFilePath = join(process.env.OUTPUT_PATH, mnFileName);
  const enFilePath = join(process.env.OUTPUT_PATH, enFileName);

  if (!existsSync(mnFilePath)) {
    writeFileSync(mnFilePath, '{}');
  }

  if (!existsSync(enFilePath)) {
    writeFileSync(enFilePath, '{}');
  }

  const mnFile = readFileSync(mnFilePath, 'utf-8');
  const enFile = readFileSync(enFilePath, 'utf-8');

  const mnFileObject = JSON.parse(mnFile);
  const enFileObject = JSON.parse(enFile);

  mnFileObject[translationKey] = word;
  enFileObject[translationKey] = translation;

  writeFileSync(mnFilePath, JSON.stringify(unflatten(mnFileObject), null, 2));
  writeFileSync(enFilePath, JSON.stringify(unflatten(enFileObject), null, 2));
};

export default generator;
