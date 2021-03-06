import { extname } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { FileExtensions } from '../constants/file-extensions';
import { HtmlReplacerStrategy } from '../constants/html-replacer-strategy';
import replaceAngularHTML from '../replacers/angular';
import replaceHTML from '../replacers/html';

const replace = (
  path: string,
  word: string,
  translation: string,
  translationKey: string,
): boolean => {
  console.log(translation);
  const fileExtension = extname(path);

  if (fileExtension === FileExtensions.JS) {
    // TODO implement JavaScript replacer
  } else if (fileExtension === FileExtensions.HTML) {
    const file = readFileSync(path, 'utf-8');
    const replacedSource =
      process.env.HTML_REPLACER_STRATEGY === HtmlReplacerStrategy.Angular
        ? replaceAngularHTML(file, word, translationKey)
        : replaceHTML(file);

    try {
      writeFileSync(path, replacedSource);
    } catch (e) {
      console.error(e);
      return false;
    }

    return true;
  }

  return false;
};

export default replace;
