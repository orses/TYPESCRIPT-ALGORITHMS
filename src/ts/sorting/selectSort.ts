/*
|--------------------------------------------------------------------------
| Application Info
|--------------------------------------------------------------------------
|
| Description: This algorithm receives an array with numbers and returns a sorted array using
| the Selection Sort method.
| The function sorts the array by repeatedly finding the minimum element from the rest of the array
| that is unsorted, and moving the value to the first position
| There are two loops, one, the outer, to determine how many pass we need to do; and other,
| the inner, to make the comparisons finding the minimum value and inserting it in the first position.
| Functionality: Sorting an numbered array
| Category: Sorting
| Variants: Using ES6 array destructuring and reducing the second loop dynamically
|
*/

/**
 * This function use the Select Sort algorithm for order an array
 * in ascending mode
 ** Algorithm: Select Sort
 ** Complexity: O(n²)
 * @param {number[]} numbers
 * @returns {number[]} sorted numbers
 */
function selectSort(numbers: number[]): number[] {
  const inputData: number[] = [...numbers];

  for (let i = 0, len = inputData.length; i < len - 1; i++) {
    // we don't need the last element
    let indexMin = i;
    for (let j = i + 1; j < len; j++) {
      if (inputData[indexMin] > inputData[j]) indexMin = j;
    }

    // If the element to sort is different from the element of the start position
    // in we are sorting, then we swaps the elements
    // If there changes in the indexMin, we have a new minimum
    if (indexMin !== i)
      [inputData[i], inputData[indexMin]] = [inputData[indexMin], inputData[i]];
  }

  return inputData;
}

export default selectSort;
