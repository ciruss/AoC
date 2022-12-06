const { input } = require('./input');

const inputTest = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
];

function sliceIntoChunks(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i += 3) {
    const chunk = arr.slice(i, i + 3);
    res.push(chunk);
  }
  return res;
}

const rucksacks = sliceIntoChunks(input);

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperCaseAlphabet = alpha.map((x) => String.fromCharCode(x));
const lowerCaseAlphabet = alpha.map((x) => String.fromCharCode(x + 32));

const alphabet = [...lowerCaseAlphabet, ...upperCaseAlphabet];

function solution(rucksacks) {
  let score = 0;

  return rucksacks.reduce((score, curr) => {
    const [first, second, third] = curr;
    let commonLetter = '';

    [...first].forEach((letter) => {
      if ([...second].find((a) => a === letter) && [...third].find((a) => a === letter)) {
        commonLetter = letter;
      }
    });

    const scoreOfLetter = alphabet.indexOf(commonLetter) + 1;
    return score + scoreOfLetter;
  }, score);
}

console.log(solution(rucksacks));
