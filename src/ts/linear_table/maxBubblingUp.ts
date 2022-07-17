/**
 *
 * This function receive a number array and return the array with the
 * maximum value as last element.
 * There's one requeriment, the maximum value must bubble up through the array
 * and be the last element.
 * This is a base for bubble sorting algorithm
 * Source: Algorithms JavaScript by Yang Hu - Maximum Value
 */
function maxBubblingUp(numbers: number[]): [number, number[]] {
  const inputValues = [...numbers];

  for (let i = 0, len = inputValues.length - 1; i < len; i++) {
    if (inputValues[i] > inputValues[i + 1]) {
      [inputValues[i], inputValues[i + 1]] = [
        inputValues[i + 1],
        inputValues[i],
      ];
    }
  }

  return [inputValues[inputValues.length - 1], inputValues];
}

export default maxBubblingUp;
