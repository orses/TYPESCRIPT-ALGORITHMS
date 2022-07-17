/*
|--------------------------------------------------------------------------
| Application Info
|--------------------------------------------------------------------------
|
| Description: This algorithm receives an array with numbers and returns a sorted array using
| the bubble method.
| There are two loops, one, the outer, to determine how many pass we need to do; and other,
| the inner, to make the comparisons.
| Functionality: Sorting an numbered array
| Category: Sorting
| Variants: Using ES6 array destructuring and reducing the second loop dynamically
|
*/

/**
 * This function get an array of numbers and return the array sorted
 * Source: Algorithms JavaScript by Yang Hu - Bubble Sorting Algorithm
 ** Algorithm: Bubble Sort
 ** Complexity: O(n²)
 * @param {number[]} numbers
 * @returns {number[]}
 */
function bubbleSort(numbers: number[]): number[] {
  const sortData = [...numbers];

  for (let i = 0, len = sortData.length - 1; i < len; i++) {
    for (let j = 0, lenSecond = sortData.length - 1 - i; j < lenSecond; j++) {
      if (sortData[j] > sortData[j + 1])
        [sortData[j], sortData[j + 1]] = [sortData[j + 1], sortData[j]];
    }
  }

  return sortData;
}

export default bubbleSort;
