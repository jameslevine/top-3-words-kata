module.exports.formatString = (string) => {
  const regexPattern = /[^0-9A-Za-z']/g;
  const cleanedString = string.replace(regexPattern, " ");
  return cleanedString;
};

module.exports.makeLowercase = (string) => {
  const lowercaseString = string.toLowerCase();
  return lowercaseString;
};
