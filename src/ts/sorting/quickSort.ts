/* eslint-disable no-param-reassign */
/* function defaultCompare(
  a: number | string,
  b: number | string,
  mode: string = 'ASC'
): number {
  if (a === b) return 0;
  if (mode === 'ASC') return a < b ? -1 : 1;
  return a < b ? 1 : -1;
} */

/**
 * This function make the partitioning
 * @param {number[]} data
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function quick(data: number[], left: number, right: number): number[] {
  const dataLength = data.length;
  if (dataLength <= 1) return data;

  const pivot = data[Math.trunc((left + right) / 2)];
  let leftPointer = left;
  let rightPointer = right;

  while (leftPointer <= rightPointer) {
    // moving the left pointer to find a value greater than pivot value
    while (data[leftPointer] < pivot) {
      leftPointer++;
    }
    // moving the right pointer to find a value less than pivot value
    while (data[rightPointer] > pivot) {
      rightPointer--;
    }

    // swap the values to the correct half
    if (leftPointer <= rightPointer) {
      [data[leftPointer], data[rightPointer]] = [
        data[rightPointer],
        data[leftPointer],
      ];
      leftPointer++;
      rightPointer--;
    }
  }

  if (left < rightPointer) quick(data, left, rightPointer);
  if (leftPointer < right) quick(data, leftPointer, right);

  return data;
}

/**
 * This function sorts a number array using the Quick Sort algorithm
 *
 ** Algorithm: Quick Sort
 ** Complexity: Θ(n²)
 * @param {number[]} data
 * @returns
 */
function quickSort(data: number[]) {
  return quick(data, 0, data.length - 1);
}

export default quickSort;
