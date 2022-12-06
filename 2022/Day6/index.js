const testInputOne = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'; // answer = 11
const testInputTwo = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'; // answer = 29

// For solution 1, the sample size is 4
function day6(input) {
  const sampleSize = 4;
  let index = 0;

  for (index; index < input.length; index++) {
    if (index >= sampleSize) {
      const subString = input.substring(index - sampleSize, index);
      const stringSet = new Set(subString);
      if (stringSet.size === sampleSize) {
        break;
      }
    }
  }

  return index;
}

console.log(day6(testInputOne));
