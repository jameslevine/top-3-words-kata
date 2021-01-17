const [, , sentence, numberOfWords] = process.argv;
if (process.argv.length <= 2) {
  console.log(
    "Usage: node src/scripts/topWords.js <sentence(string)> <numberOfWords(integer)[optional - defaults to 3]>"
  );
}
const {
  formatString,
  findTopWords,
  calculateWordFrequencies,
} = require("../utils/topWords.js");

module.exports.run = (sentence, numberOfWords = 3) => {
  try {
    if (!sentence) {
      throw new Error("1 or more arguments not supplied");
    }
    const formattedString = formatString(sentence);
    const wordCounts = calculateWordFrequencies(formattedString);
    const topWords = findTopWords(wordCounts, numberOfWords);
    console.log(`Top ${numberOfWords} words: `, topWords);
    return topWords;
  } catch (error) {
    throw new Error(error);
  }
};

if (require.main == "module") {
  console.log("required as a module");
} else {
  console.log("called directly");
  this.run(sentence, numberOfWords);
}
