/**
 * This function takes an array and a index to delete the related value.
 *
 * This is a base for Insert sorting algorithm, this is why this function works with
 * a classic for loop to think more about the algorithm
 *
 * Source: Algorithms JavaScript by Yang Hu - Linear Table Delete.
 * @param {number[]} data - The array of number values
 * @param {number} deleteIndex - A integer index
 * @returns {number[]} a new array with the value at deleteIndex removed
 */
function deleteLinearTable(data: number[], deleteIndex: number): number[] {
  const tempData = Array(data.length - 1);

  for (let i = 0, len = tempData.length; i < len; i++) {
    if (i < deleteIndex) tempData[i] = data[i];
    else tempData[i] = data[i + 1];
  }

  return tempData;
}

export default deleteLinearTable;
