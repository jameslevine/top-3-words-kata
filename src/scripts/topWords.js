const [, , sentence, numberOfWords] = process.argv;
const {
  formatString,
  findTopWords,
  calculateWordFrequencies,
} = require("../utils/topWords.js");

module.exports.run = (sentence, numberOfWords) => {
  try {
    const formattedString = formatString(sentence);
    const wordCounts = calculateWordFrequencies(formattedString);
    const topWords = findTopWords(wordCounts, numberOfWords);
    console.log(topWords);
    return topWords;
  } catch (error) {
    console.log(error);
  }
};

if (require.main == "module") {
  console.log("required as a module");
} else {
  console.log("called directly");
  this.run(sentence, numberOfWords);
}
