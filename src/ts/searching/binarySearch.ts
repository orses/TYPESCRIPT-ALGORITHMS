/**
 * This function search a value in an ordered array data
 *
 ** Algorithm: Binary Search Sort
 ** Complexity: O(log n)
 * @param {number[]} data - The ordered data
 * @param {number} key - The value to find in data
 * @returns {number} The index of the found value or -1 if key doesn't exists
 */
function binarySearch(data: number[], key: number): number {
  let start = 0;
  let end = data.length - 1;
  let middle = 0;

  while (start <= end) {
    middle = Math.trunc((start + end) / 2);
    if (data[middle] === key) return middle;
    if (data[middle] < key) start = middle + 1;
    if (data[middle] > key) end = middle - 1;
  }

  return -1;
}

export default binarySearch;
