module.exports.formatString = (string) => {
  const matchPunctuationPattern = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  const matchExtraWhitespacePattern = /\s{2,}/g;
  const removedPunctuationString = string.replace(matchPunctuationPattern, "");
  const removedExtraWhiteSpaceString = removedPunctuationString.replace(
    matchExtraWhitespacePattern,
    " "
  );
  const lowercaseString = removedExtraWhiteSpaceString.toLowerCase();
  return lowercaseString;
};

const isWordAlreadyCounted = (wordFrequencies, word) => {
  const isWordAlreadyCounted =
    wordFrequencies.filter((x) => x.name === word).length > 0;
  return isWordAlreadyCounted;
};

const addToFrequencyCount = (wordFrequencies, word, incrementValue) => {
  return wordFrequencies
    .filter((x) => x.name === word)
    .map((x) => {
      return (x.count += incrementValue);
    });
};

const sortArrayByCount = (wordFrequencies) => {
  const sortedArray = wordFrequencies.sort((a, b) => {
    return b.count - a.count;
  });
  return sortedArray;
};

module.exports.calculateWordFrequencies = (string) => {
  const splitString = string.split(" ");
  let wordFrequencies = [];
  splitString.map((word) => {
    if (isWordAlreadyCounted(wordFrequencies, word)) {
      addToFrequencyCount(wordFrequencies, word, 1);
    } else {
      wordFrequencies.push({ name: word, count: 1 });
    }
  });
  const sortedFrequencies = sortArrayByCount(wordFrequencies);
  return sortedFrequencies;
};

module.exports.findTopWords = (wordCounts, numberOfWords) => {
  const topWordsSlice = wordCounts.slice(0, numberOfWords);
  console.table(topWordsSlice);
  const topWordsNames = topWordsSlice.map((x) => x.name);
  return topWordsNames;
};
