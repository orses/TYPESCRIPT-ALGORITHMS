/**
 * This function search a value in a number array using a basic search algorithm
 * Source: Algorithms JavaScript by Yang Hu - Linear Table Search
 * We don't use built-in methods.
  
 ** Algorithm: Linear Search
 ** Complexity: O(n)
 * @param {number[]} data
 * @param {number} value
 * @returns {number} returns the index if the value is found, otherwise returns -1
 */
function searchLinearTable(data: number[], value: number): number {
  for (let i = 0, len = data.length; i < len; i++) {
    if (data[i] === value) return i;
  }
  return -1;
}

export default searchLinearTable;
