/**
 * This function takes an array and a unique value to append it at least element.
 *
 * This is a base for Insert sorting algorithm, this is why this function works with
 * a classic for loop to think more about the algorithm.
 *
 * Source: Algorithms JavaScript by Yang Hu - Linear Table Append
 * @param {number[]} data - The number array when to append the new value
 * @param {number} newValue - Value to append to the array
 * @returns {number[]} a new array with the newValue appended
 */
function appendLinearTable(data: number[], newValue: number): number[] {
  // we create a new array with the input array length + 1, to avoid
  // the use of push(), desestructuring arrays, slice(), splice() and so on.
  const copyData = Array(data.length + 1);

  for (let i = 0, len = copyData.length - 1; i < len; i++) {
    copyData[i] = data[i];
  }

  copyData[copyData.length - 1] = newValue;

  return copyData;
}

export default appendLinearTable;
