/**
 * This function make a binary search on an array
 *
 *
 ** Algorithm: Binary Search Sort
 ** Complexity: O(log n)
 * @param {number:[]} data
 * @param {number} key - The value to find in data
 * @returns {number} The index of the found value or -1 if key doesn't exists
 */
function binarySearch(data: number[], key: number): number {
  let start = 0;
  let end = data.length - 1;

  function getMiddle(low: number, hight: number): number {
    return Math.trunc((low + hight) / 2);
  }

  let middle = getMiddle(start, end);

  while (start <= end) {
    if (data[middle] === key) return middle;
    if (data[middle] < key) start = middle + 1;
    if (data[middle] > key) end = middle - 1;
    middle = getMiddle(start, end);
  }

  return -1;
}

export default binarySearch;
