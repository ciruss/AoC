const { input } = require('./input');

const stacksInputProd = {
  1: ['N', 'R', 'G', 'P'],
  2: ['J', 'T', 'B', 'L', 'F', 'G', 'D', 'C'],
  3: ['M', 'S', 'V'],
  4: ['L', 'S', 'R', 'C', 'Z', 'P'],
  5: ['P', 'S', 'L', 'V', 'C', 'W', 'D', 'Q'],
  6: ['C', 'T', 'N', 'W', 'D', 'M', 'S'],
  7: ['H', 'D', 'G', 'W', 'P'],
  8: ['Z', 'L', 'P', 'H', 'S', 'C', 'M', 'V'],
  9: ['R', 'P', 'F', 'L', 'W', 'G', 'Z'],
};

const stacksInputDev = {
  1: ['Z', 'N'],
  2: ['M', 'C', 'D'],
  3: ['P'],
};

// first is quantity, second is start stack, third is end stack
const testInput = [
  [1, 2, 1],
  [3, 1, 3],
  [2, 2, 1],
  [1, 1, 2],
];

function solution(input) {
  const stacks = { ...stacksInputProd };
  let result = '';

  input.forEach((order) => {
    const [quantityStr, startStackStr, endStackStr] = order;
    const quantity = Number(quantityStr);
    const startStack = Number(startStackStr);
    const endStack = Number(endStackStr);

    const itemsToMove = stacks[startStack].splice(stacks[startStack].length - quantity, quantity);

    stacks[endStack].push(...itemsToMove);
  });

  for (const stack in stacks) {
    if (stacks.hasOwnProperty(stack)) {
      const element = stacks[stack];
      result += element.pop();
    }
  }

  return result;
}

console.log(solution(input));
