const [, , string] = process.argv;
const { formattedString, makeLowercase } = require("../utils/topWords.js");

module.exports.run = (string) => {
  try {
    const formattedString = formatString(string);
    const lowercaseString = makeLowercase(formattedString);
    console.log(lowercaseString);
  } catch (error) {
    console.log(error);
  }
};

if (require.main == "module") {
  console.log("required as a module");
} else {
  console.log("called directly");
  this.run(string);
}
