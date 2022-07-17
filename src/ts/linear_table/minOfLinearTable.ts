/**
 *
 * This function receive a number array and return the minimum value as last element.
 * There's one requeriment don't touch the  array
 * This is a base for Select sorting algorithm
 * Source: Algorithms JavaScript by Yang Hu - Minimum Value
 */
function minOfLinearTable(numbers: number[]) {
  // I use classic for loop
  let minIndex = 0;
  for (let i = 1, len = numbers.length - 1; i < len; i++) {
    if (numbers[minIndex] > numbers[i]) minIndex = i;
  }

  return numbers[minIndex];
}

export default minOfLinearTable;
