const {
  formatString,
  calculateWordFrequencies,
  findTopWords,
} = require("../../utils/topWords");

describe("formatString function test", () => {
  test("string with punctuation is correctly formatted", () => {
    const sentence =
      "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";
    const expected =
      "in a village of la mancha the name of which i have no desire to call to mind there lived not long since one of those gentlemen that keep a lance in the lancerack an old buckler a lean hack and a greyhound for coursing an olla of rather more beef than mutton a salad on most nights scraps on saturdays lentils on fridays and a pigeon or so extra on sundays made away with threequarters of his income";
    expect(formatString(sentence)).toEqual(expected);
  });
});

describe("calculateWordFrequencies function test", () => {
  test("check correct frequencies", () => {
    const sentence =
      "in a village of la mancha the name of which i have no desire to call to mind there lived not long since one of those gentlemen that keep a lance in the lancerack an old buckler a lean hack and a greyhound for coursing an olla of rather more beef than mutton a salad on most nights scraps on saturdays lentils on fridays and a pigeon or so extra on sundays made away with threequarters of his income";
    const expected = [
      { name: "a", count: 6 },
      { name: "of", count: 5 },
      { name: "on", count: 4 },
      { name: "in", count: 2 },
      { name: "the", count: 2 },
      { name: "to", count: 2 },
      { name: "an", count: 2 },
      { name: "and", count: 2 },
      { name: "village", count: 1 },
      { name: "la", count: 1 },
      { name: "mancha", count: 1 },
      { name: "name", count: 1 },
      { name: "which", count: 1 },
      { name: "i", count: 1 },
      { name: "have", count: 1 },
      { name: "no", count: 1 },
      { name: "desire", count: 1 },
      { name: "call", count: 1 },
      { name: "mind", count: 1 },
      { name: "there", count: 1 },
      { name: "lived", count: 1 },
      { name: "not", count: 1 },
      { name: "long", count: 1 },
      { name: "since", count: 1 },
      { name: "one", count: 1 },
      { name: "those", count: 1 },
      { name: "gentlemen", count: 1 },
      { name: "that", count: 1 },
      { name: "keep", count: 1 },
      { name: "lance", count: 1 },
      { name: "lancerack", count: 1 },
      { name: "old", count: 1 },
      { name: "buckler", count: 1 },
      { name: "lean", count: 1 },
      { name: "hack", count: 1 },
      { name: "greyhound", count: 1 },
      { name: "for", count: 1 },
      { name: "coursing", count: 1 },
      { name: "olla", count: 1 },
      { name: "rather", count: 1 },
      { name: "more", count: 1 },
      { name: "beef", count: 1 },
      { name: "than", count: 1 },
      { name: "mutton", count: 1 },
      { name: "salad", count: 1 },
      { name: "most", count: 1 },
      { name: "nights", count: 1 },
      { name: "scraps", count: 1 },
      { name: "saturdays", count: 1 },
      { name: "lentils", count: 1 },
      { name: "fridays", count: 1 },
      { name: "pigeon", count: 1 },
      { name: "or", count: 1 },
      { name: "so", count: 1 },
      { name: "extra", count: 1 },
      { name: "sundays", count: 1 },
      { name: "made", count: 1 },
      { name: "away", count: 1 },
      { name: "with", count: 1 },
      { name: "threequarters", count: 1 },
      { name: "his", count: 1 },
      { name: "income", count: 1 },
    ];
    expect(calculateWordFrequencies(sentence)).toEqual(expected);
  });
});
