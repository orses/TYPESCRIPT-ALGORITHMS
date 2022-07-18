/*
|--------------------------------------------------------------------------
| Application Info
|--------------------------------------------------------------------------
|
| Description: this function takes an unsorted array and returns a sorted one 
| using the Insertion Sort method. 
| The insertion sort takes one item at a time an inserts it in its correct position. 
| The insertion sort assumes that the first element is already sorted, 
| so it compares the second and successives items to the previous one an replaces it if it is necessary.
| Functionality: Sorting a numbered array
| Category: Sorting
|
*/

/**
 * This function received an array and return a new array in ascending orden
 * using Insert Sort Algorithm
 *
 ** Algorithm: Insert Sort
 ** Complexity: O(n²)
 * @param {number[]} data - The array to be sorted
 * @returns {number[]} a new sorted array
 */
function insertSort(data: number[]): number[] {
  // Don't mutate the input data
  const tempData = [...data];

  // i = 1, it assumes that the first is sorted
  for (let i = 1, leng = tempData.length; i < leng; i++) {
    const itemToSort = tempData[i];
    let j = i - 1; // position to compare

    while (j >= 0 && tempData[j] > itemToSort) {
      // we move the element one position to the right,
      // where was the itemToSort
      // and we decrease the key
      tempData[j + 1] = tempData[j--];
    }

    // the item to sort is now inserted in its right place
    tempData[j + 1] = itemToSort;
  }

  return tempData;
}
export default insertSort;
