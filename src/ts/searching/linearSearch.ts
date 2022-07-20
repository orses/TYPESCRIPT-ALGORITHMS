/* eslint-disable no-param-reassign */
/**
 * Linear Search optimized
 * source: Cormen, Thomas H. Algorithms Unlocked. Cambridge, Massachusetts: MIT Press, 2013, pp 16, 20-21
 * Improves:
 * - reduce the leaps
 * - reduce the number of if
 *
 * Complexity: O(n)
 * @param {number[]} data
 * @param {number} value to find
 * @returns {number} the index of the value if its found, otherwise -1
 */
function linearSearch(data: number[], value: number): number {
  const lastIndex = data.length - 1;
  const lastValue = data[lastIndex]; // sentinel
  data[lastIndex] = value; // key. Don't worry, we are not mutating the input data
  let i = 0;

  while (data[i] !== value) {
    i++;
  }

  // restoring the data, we don't want to mutate the input data
  data[lastIndex] = lastValue;

  if (i < lastIndex || lastValue === value) return i;

  return -1;
}

export default linearSearch;
