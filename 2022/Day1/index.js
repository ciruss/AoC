const { input } = require('./input');

const testInput = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]];

function solutionOne(input) {
  let calories = 0;

  input.forEach((pack) => {
    const totalCalories = pack.reduce((calories, curr) => calories + curr, 0);

    if (totalCalories > calories) calories = totalCalories;
  });

  return calories;
}

function solutionTwo(input) {
  const caloriePacks = [];

  input.forEach((pack) => {
    const totalCalories = pack.reduce((calories, curr) => calories + curr, 0);

    if (caloriePacks.length < 3) {
      caloriePacks.push(totalCalories);
    } else {
      caloriePacks.sort((a, b) => b - a);

      if (totalCalories > caloriePacks[2]) {
        caloriePacks.pop();
        caloriePacks.push(totalCalories);
      }
    }
  });

  return caloriePacks[0] + caloriePacks[1] + caloriePacks[2];
}

console.log(solutionTwo(input));
