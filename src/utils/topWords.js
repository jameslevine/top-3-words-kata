module.exports.formatString = (string) => {
  const regexPattern = /[\W_]+/g;
  const cleanedString = string.replace(regexPattern, " ");
  return cleanedString;
};

module.exports.makeLowercase = (string) => {
  const lowercaseString = string.toLowerCase();
  return lowercaseString;
};
