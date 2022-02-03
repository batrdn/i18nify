import generate from './generator';
import * as dotenv from 'dotenv';
dotenv.config();
describe('Generator test', () => {
  it('should generate both Mongolian and English translation JSON files', () => {
    const word = 'word';
    const translation = 'translations';
    const translationKey = 'translationKey';
    generate(word, translation, translationKey);
  });
});
