module.exports.formatString = (string) => {
  const regexPattern = /[^0-9A-Za-z']/g;
  const cleanedString = string.replace(regexPattern, " ");
  const lowercaseString = cleanedString.toLowerCase();
  return lowercaseString;
};

const isWordAlreadyCounted = (wordFrequencies, word) => {
  const isWordAlreadyCounted =
    wordFrequencies.filter((x) => x.name === word).length > 0;
  return isWordAlreadyCounted;
};

const addOneToFrequencyCount = (wordFrequencies, word) => {
  return wordFrequencies
    .filter((x) => x.name === word)
    .map((x) => {
      return (x.count += 1);
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
      addOneToFrequencyCount(wordFrequencies, word);
    } else {
      wordFrequencies.push({ name: word, count: 1 });
    }
  });
  const sortedFrequencies = sortArrayByCount(wordFrequencies);
  return sortedFrequencies;
};

module.exports.findTopWords = (wordCounts, numberOfWords) => {
  return wordCounts.slice(0, numberOfWords);
};
