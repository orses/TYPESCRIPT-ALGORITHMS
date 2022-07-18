/**
 * This function takes an array and a unique value to insert in the given position.
 *
 * This is a base for Insert sorting algorithm, this is why this function works with
 * a classic for loop to think more about the algorithm
 *
 * Source: Algorithms JavaScript by Yang Hu - Linear Table Insert
 * @param {number[]} data - The array of number values
 * @param {number} newValue - Value to append to the array
 * @param {number} insertIndex - Position as integer to insert the new value
 * @returns {number[]} a new array with the newValue appended
 */
function insertLinearTable(
  data: number[],
  newValue: number,
  insertIndex: number
): number[] {
  const tempData = Array(data.length + 1);

  // copy data and making room for the new value
  for (let i = 0, len = tempData.length - 1; i < len; i++) {
    if (i < insertIndex) tempData[i] = data[i];
    else tempData[i + 1] = data[i];
  }

  // insert the new value
  tempData[insertIndex] = newValue;

  return tempData;
}

export default insertLinearTable;
