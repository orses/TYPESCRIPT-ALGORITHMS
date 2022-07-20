/**
 *
 * This function receive a number array and return values in inverse order.
 * There's one requeriment don't touch the  array
 * Source: Algorithms JavaScript by Yang Hu - Reverse Array
 * We don't use built-in methods
 */
function reverseLinearTable(data: number[]): number[] {
  const numElements = data.length;
  const reverseData = new Array(numElements);
  const middle = numElements / 2;

  for (let i = 0, len = numElements; i < middle; i++) {
    [reverseData[i], reverseData[len - i - 1]] = [data[len - i - 1], data[i]];
  }

  return reverseData;
}

export default reverseLinearTable;
