const topWords = require("../../scripts/topWords");

describe("topWords Script", () => {
  test("paragraph with punctuation should return array of top 3 words", () => {
    const sentence =
      "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";
    const numberOfWords = 3;
    const expected = ["a", "of", "on"];
    expect(topWords.run(sentence)).toStrictEqual(expected);
  });
  test("sentence with uppercase and lowercase words should return array of top 3 words lowercase", () => {
    const sentence = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
    const numberOfWords = 3;
    const expected = ["e", "ddd", "aa"];
    expect(topWords.run(sentence, numberOfWords)).toStrictEqual(expected);
  });
  test("sentence with apostrophes should return array of top 3 words", () => {
    const sentence =
      "won't won't won't won't don't don't can't shouldn't shouldn't shouldn't";
    const numberOfWords = 3;
    const expected = ["won't", "shouldn't", "don't"];
    expect(topWords.run(sentence, numberOfWords)).toStrictEqual(expected);
  });

  test("sentence with special characters should return array of top 3 words", () => {
    const sentence =
      "won't won't won't won't don't don't can't && shouldn't: shouldn't-- $%^ shouldn't";
    const numberOfWords = 3;
    const expected = ["won't", "shouldn't", "don't"];
    expect(topWords.run(sentence, numberOfWords)).toStrictEqual(expected);
  });
});

describe("topWords script - testing incorrect usage", () => {
  test("no arguments supplied should receive error - 1 or more arguments not supplied", () => {
    expect(() => topWords.run()).toThrow("1 or more arguments not supplied");
  });
});
