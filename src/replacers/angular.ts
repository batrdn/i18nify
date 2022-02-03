const replaceAngularHTML = (source: string, word: string, translationKey: string): string => {
  // Find all occurences of the word in the source
  const regex = new RegExp(word, 'g');
  // Replace all occurences of the word with the translation key
  return source.replace(regex, `{{ '${translationKey}' | i18nextEager }}`);
};

export default replaceAngularHTML;
