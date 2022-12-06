const { input } = require('./input');

const inputTest = [
  ['A', 'Y'],
  ['B', 'X'],
  ['C', 'Z'],
];
const resultPoints = {
  win: 6,
  draw: 3,
  loss: 0,
};
const myHandPoints = {
  rock: 1,
  paper: 2,
  scissors: 3,
};
const myHandDefinitionSolution1 = {
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
};
const myHandDefinitionSolution2 = {
  X: 'loss',
  Y: 'draw',
  Z: 'win',
};
const handResults = {
  AX: 'draw',
  AY: 'win',
  AZ: 'loss',
  BX: 'loss',
  BY: 'draw',
  BZ: 'win',
  CX: 'win',
  CY: 'loss',
  CZ: 'draw',
};

const endOptions = {
  A: {
    win: 'paper',
    loss: 'scissors',
    draw: 'rock',
  },
  B: {
    win: 'scissors',
    loss: 'rock',
    draw: 'paper',
  },
  C: {
    win: 'rock',
    loss: 'paper',
    draw: 'scissors',
  },
};

function solution1(games) {
  let score = 0;

  return games.reduce((acc, curr) => {
    const [opponent, me] = curr;
    let points = myHandPoints[myHandDefinitionSolution1[me]];

    points += resultPoints[handResults[`${opponent}${me}`]];

    return acc + points;
  }, score);
}

function solution2(games) {
  let score = 0;

  return games.reduce((acc, curr) => {
    const [opponent, result] = curr;
    // Points from my choice
    let points = myHandPoints[endOptions[opponent][myHandDefinitionSolution2[result]]];

    // Points from result
    points += resultPoints[myHandDefinitionSolution2[result]];

    return acc + points;
  }, score);
}

console.log(solution1(input));
console.log(solution2(input));
