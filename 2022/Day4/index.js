const { input } = require('./input');

const inputTest = [
  ['2-4', '6-8'],
  ['2-3', '4-5'],
  ['5-7', '7-9'],
  ['2-8', '3-7'],
  ['6-6', '4-6'],
  ['2-6', '4-8'],
];

function solution(sections) {
  let score = 0;

  return sections.reduce((score, curr) => {
    const [first, second] = curr;
    const [firstStart, firstEnd] = first.split('-');
    const [secondStart, secondEnd] = second.split('-');

    if (Number(firstStart) <= Number(secondStart) && Number(firstEnd) >= Number(secondEnd)) {
      return score + 1;
    }

    if (Number(secondStart) <= Number(firstStart) && Number(secondEnd) >= Number(firstEnd)) {
      return score + 1;
    }

    if (Number(firstStart) >= Number(secondStart) && Number(firstStart) <= Number(secondEnd)) {
      return score + 1;
    }

    if (Number(firstEnd) >= Number(secondStart) && Number(firstEnd) <= Number(secondEnd)) {
      return score + 1;
    }

    return score;
  }, score);
}

console.log(solution(input));
